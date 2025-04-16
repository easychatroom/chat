const firebaseConfig = {
  apiKey: "AIzaSyBhfQ1Wf5JEy6sOU4ExXboRI4Ir4y_aKZw",
  authDomain: "easy-chatroom.firebaseapp.com",
  databaseURL: "https://easy-chatroom-default-rtdb.firebaseio.com",
  projectId: "easy-chatroom",
  storageBucket: "easy-chatroom.firebasestorage.app",
  messagingSenderId: "985049198428",
  appId: "1:985049198428:web:d0eb7e2de39887710c9b99",
  measurementId: "G-QDESJ2WR42"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const STATIC_ROOM = "050BBB66HH";
const ROOM_TTL_MS = 2 * 60 * 1000;
let username = localStorage.getItem("chat_username");
let roomCode = "";
let clientId = generateClientId();
let lastActivity = Date.now();
let typingTimeout;

window.onload = () => {
  if (!username) {
    showScreen("usernameScreen");
  } else {
    document.getElementById("namePreview").innerText = username;
    showScreen("roomChoiceScreen");
  }
  cleanupOldRooms();
  if (!username) {
    showScreen("usernameScreen");
  } else {
    document.getElementById("namePreview").innerText = username;
    showScreen("roomChoiceScreen");
  }
};

function saveUsername() {
  username = document.getElementById("usernameInput").value.trim();
  if (!username) return alert("Please enter your name");
  localStorage.setItem("chat_username", username);
  document.getElementById("namePreview").innerText = username;
  showScreen("roomChoiceScreen");
}

function generateRoom() {
  roomCode = genRoomCode();
  db.ref("rooms/" + roomCode).set({ active: true, created: Date.now() });
  startChat();
}

function joinRoom() {
  roomCode = document.getElementById("roomCodeInput").value.trim().toUpperCase();
  if (!roomCode) return alert("Enter a valid room code");

  db.ref("rooms/" + roomCode).get().then((snap) => {
    if (snap.exists() && snap.val().active !== false) {
      startChat();
    } else {
      alert("Room doesn't exist or is inactive.");
    }
  });
}

function joinGlobalRoom() {
  roomCode = "050BBB66HH";
  db.ref("rooms/" + roomCode).set({ active: true, created: Date.now() });
  startChat();
}

function startChat() {
  showScreen("chatScreen");
  document.getElementById("userDisplay").innerText = username;
  document.getElementById("roomDisplay").innerText = roomCode;
  listenForMessages();
  listenForTyping();
  startInactivityTimer();
  logSystemMessage(`${username} joined the room`);
  window.addEventListener('beforeunload', () => {
    logSystemMessage(`${username} left the room`);
  });
}
function logSystemMessage(text) {
  const key = db.ref().push().key;
  db.ref(`rooms/${roomCode}/messages/${key}`).set({
    msg: text,
    sender: "System",
    senderId: "system",
    timestamp: Date.now()
  });
}

function showScreen(id) {
  ["usernameScreen", "roomChoiceScreen", "codeEntryScreen", "chatScreen"].forEach(screen => {
    document.getElementById(screen).style.display = "none";
  });
  document.getElementById(id).style.display = "flex";
}

function sendMessage() {
  const input = document.getElementById("msgInput");
  const msg = input.value.trim();
  if (!msg) return;

  const key = db.ref().push().key;
  db.ref(`rooms/${roomCode}/messages/${key}`).set({
    msg,
    sender: username,
    senderId: clientId,
    timestamp: Date.now()
  });
  input.value = '';
  sendTyping(true);
  lastActivity = Date.now();
}

function listenForMessages() {
  db.ref(`rooms/${roomCode}/messages`).on("child_added", (snap) => {
    const { msg, sender, senderId, timestamp } = snap.val();
    const sent = senderId === clientId;
    addMessage(msg, sender, timestamp, sent);
    if (roomCode !== STATIC_ROOM) {
      db.ref(`rooms/${roomCode}/messages/${snap.key}`).remove();
    }    
  });
}

function addMessage(text, sender, timestamp, sent) {
  const div = document.createElement("div");
  div.classList.add("msg", sent ? "sent" : "received");
  const time = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  div.innerHTML = `<span class="sender-name">${sender}</span><br>${text}<small>${time}</small>`;
  document.getElementById("messages").appendChild(div);
  document.getElementById("messages").scrollTop = 99999;
}

function sendTyping(stop = false) {
  if (stop) {
    db.ref(`rooms/${roomCode}/typing/${clientId}`).remove();
  } else {
    db.ref(`rooms/${roomCode}/typing/${clientId}`).set(username);
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
      db.ref(`rooms/${roomCode}/typing/${clientId}`).remove();
    }, 3000);
  }
}

function listenForTyping() {
  const el = document.getElementById("typing");
  db.ref(`rooms/${roomCode}/typing`).on("value", (snap) => {
    const data = snap.val();
    if (!data) return (el.innerText = "");
    const others = Object.values(data).filter((name) => name !== username);
    el.innerText = others.length ? `${others.join(", ")} typing...` : "";
  });
}

function startInactivityTimer() {
  setInterval(() => {
    if (Date.now() - lastActivity > 5 * 60 * 1000) {
      db.ref("rooms/" + roomCode).update({ active: false });
      alert("Session expired.");
      location.reload();
    }
  }, 30000);
}

function genRoomCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const get = (set, len) => Array.from({ length: len }, () => set[Math.floor(Math.random() * set.length)]).join('');
  return get(digits, 3) + get(chars, 3) + get(digits, 2) + get(chars, 2);
}

function generateClientId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
function cleanupOldRooms() {
  db.ref("rooms").once("value").then(snapshot => {
    const rooms = snapshot.val();
    if (!rooms) return;

    const now = Date.now();
    Object.entries(rooms).forEach(([code, room]) => {
      if (code === STATIC_ROOM) return;

      const created = room.created || 0;
      const isOld = now - created > ROOM_TTL_MS;

      if (isOld) {
        db.ref("rooms/" + code).remove();
        console.log("🗑️ Deleted expired room:", code);
      }
    });
  });
}
