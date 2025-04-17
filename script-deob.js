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

let messageTimestamps = [];
let isBlocked = false;
let username = null;
let roomCode = null;
let clientId = "_" + Math.random().toString(36).substr(2, 9);
let lastActivity = Date.now();
let typingTimeout;
let gr8stg = "";
const STATIC_ROOM = "050BBB66HH";
const MAX_MESSAGES = 250;

// AUDIO setup
const sound = new Audio("sounds/beep.mp3");
sound.volume = 0.3;
let mediaRecorder;
let audioChunks = [];
let isRecording = false;
let recordingTimer;

function toggleRecording() {
  if (isRecording) {
    stopRecording();
  } else {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      isRecording = true;
      document.getElementById("recordBtn").innerText = "⏹️";

      audioChunks = [];

      mediaRecorder.ondataavailable = e => audioChunks.push(e.data);

      mediaRecorder.onstop = () => {
        clearTimeout(recordingTimer);
      
        const blob = new Blob(audioChunks, { type: 'audio/webm' });
        const reader = new FileReader();
      
        reader.onloadend = () => {
          const base64Audio = reader.result.split(',')[1]; // Strip the prefix
      
          const key = db.ref().push().key;
          db.ref(`rooms/${roomCode}/messages/${key}`).set({
            msg: "[Voice message]",
            audioBase64: base64Audio,
            sender: username,
            senderId: clientId,
            timestamp: Date.now()
          });
        };
      
        reader.readAsDataURL(blob);
      };      

      // 🕒 Auto-stop after 20 seconds
      recordingTimer = setTimeout(() => {
        if (mediaRecorder && isRecording) {
          stopRecording();
        }
      }, 20000);
    }).catch(err => {
      alert("Microphone permission denied.");
    });
  }
}

function stopRecording() {
  if (mediaRecorder && isRecording) {
    mediaRecorder.stop();
    isRecording = false;
    document.getElementById("recordBtn").innerText = "🎙️";
  }
}
// INIT
window.onload = () => {
  cleanupOldRooms();
  setupSidebarBackHandler();
  initUsernameFlow();
  setupVisibilityAttention();
};

function sanitizeUsername(name) {
  return name.replace(/[.#$\[\]]/g, "_");
}
function submitProfile() {
  const name = document.getElementById("profileUsernameInput").value.trim();
  const desc = document.getElementById("profileDescriptionInput").value.trim();
  const error = document.getElementById("profileError");

  if (!name || !desc) {
    error.innerText = "Please enter both a username and a description.";
    error.style.display = "block";
    return;
  }

  error.style.display = "none";
  username = name;
  const timestamp = Date.now();
  const sanitized = sanitizeUsername(name);

  const profileRef = db.ref(`profiles/${sanitized}`);
  profileRef.get().then(snap => {
    const data = snap.val() || {};
    const history = data.usernameHistory || [];

    if (!history.includes(name)) history.push(name);

    profileRef.set({
      username: name,
      description: desc,
      lastChanged: timestamp,
      usernameHistory: history
    });

    localStorage.setItem("chat_username", name);
    localStorage.setItem("profile_description", desc);

    document.getElementById("namePreview").innerText = username;
    showScreen("roomChoiceScreen");
  });
}
function saveUsername() {
  const input = document.getElementById("usernameInput").value.trim();
  if (!input) return alert("Please enter a valid name");

  username = input;
  localStorage.setItem("chat_username", username);
  initUsernameFlow();
}

function generateRoom() {
  roomCode = genRoomCode();
  db.ref("rooms/" + roomCode).set({ active: true, created: Date.now() });
  startChat();
}
function joinRoom() {
  const inputCode = (roomCode || document.getElementById("roomCodeInput").value.trim().toUpperCase());
  if (!inputCode) return alert("Enter a valid room code");
  roomCode = inputCode;

  // Static room flow → show password screen first
  if (roomCode === STATIC_ROOM) {
    showScreen("passwordScreen");
    return;
  }

  // Regular room
  db.ref("rooms/" + roomCode).get().then(snap => {
    if (snap.exists() && snap.val().active !== false) {
      startChat();
    } else {
      alert("Room doesn't exist or is inactive.");
    }
  });
}
function startChat() {
  if (!roomCode || !username) {
    alert("Missing room or user information.");
    return showScreen("roomChoiceScreen");
  }

  showScreen("chatScreen");
  document.getElementById("userDisplay").innerText = username;
  if(roomCode = "050BBB66HH")
  {
    document.getElementById("roomDisplay").innerText = "No room code available for private rooms";
  }
  else
  {
    document.getElementById("roomDisplay").innerText = roomCode;
  }
  listenForMessages();
  listenForTyping();
  startInactivityTimer();
  trackPresence();
  listenForUserList();
}

function validateStaticRoomPassword() {
  const entered = document.getElementById("staticPasswordInput").value;
  const errorText = document.getElementById("passwordError");

  db.ref("gr8stg").get().then(snap => {
    const password = snap.val();
    if (entered === password) {
      errorText.style.display = "none";
      startChat();
    } else {
      errorText.style.display = "block";
    }
  });
}

function sendMessage() {
  const input = document.getElementById("msgInput");
  const msg = input.value.trim();
  if (!msg) return;

  const now = Date.now();
  const userKey = sanitizeUsername(username);

  // Check if user is blocked (server-side)
  db.ref(`antispamBlocked/${roomCode}/${userKey}`).once("value").then(snap => {
    const blockedUntil = snap.val();
    if (blockedUntil && now < blockedUntil) {
      const seconds = Math.ceil((blockedUntil - now) / 1000);
      alert(`⛔ You're blocked for ${seconds}s due to spam. Please wait.`);
      return;
    }

    // Record current message time
    const spamRef = db.ref(`antispam/${roomCode}/${userKey}`);
    spamRef.once("value").then(snap => {
      const history = snap.val() || [];
      const recent = [...history, now].filter(t => now - t < 3000); // only last 3 seconds

      // If 5 or more messages in 3s = spam
      if (recent.length >= 5) {
        alert("🚫 You've been blocked for 30 seconds due to spamming.");

        // Save block timeout
        db.ref(`antispamBlocked/${roomCode}/${userKey}`).set(now + 30000);

        // Delete last 5 messages
        const roomRef = db.ref(`rooms/${roomCode}/messages`);
        roomRef.orderByChild("senderId").equalTo(clientId).limitToLast(5).once("value", snap => {
          snap.forEach(child => {
            roomRef.child(child.key).remove();
          });
        });
        spamRef.set([]);
        return;
      }

      // Save updated timestamps list
      spamRef.set(recent);

      // Send message normally
      const key = db.ref().push().key;
      db.ref(`rooms/${roomCode}/messages/${key}`).set({
        msg,
        sender: username,
        senderId: clientId,
        timestamp: now
      });

      input.value = '';
      sendTyping(true);
      lastActivity = now;
    });
  });
}

function listenForMessages() {
  const roomRef = db.ref(`rooms/${roomCode}/messages`);
  const query = roomRef.limitToLast(MAX_MESSAGES);

  query.on("child_added", (snap) => {
    const data = snap.val();
    const { msg, sender, senderId, timestamp } = data;
    const sent = senderId === clientId;

    const audioUrl = data.audioUrl || null;
    const audioBase64 = data.audioBase64 || null;

    addMessage(msg, sender, timestamp, sent, audioUrl, audioBase64);

    // Only auto-delete in non-static rooms
    if (roomCode !== STATIC_ROOM) {
      db.ref(`rooms/${roomCode}/messages/${snap.key}`).remove();
    }

    // Notify
    if (!sent) {
      sound.play();
      flagPageAttention();
    }
  });
}
function addMessage(text, sender, timestamp, sent, audioUrl = null, audioBase64 = null) {
  const div = document.createElement("div");
  div.classList.add("msg", sent ? "sent" : "received");

  const time = new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  let content = `<span class="sender-name">${sender}</span><br>`;
  if (sent) {
    content += `<small>${time} · ✓✓</small>`;
  } else {
    content += `<small>${time}</small>`;
  }  
  if (!audioUrl && !audioBase64) {
    text = text.replace(new RegExp(`@${username}\\b`, 'gi'), `<span style="color:#ff4081;">@$&</span>`);
  }  
  if (audioUrl) {
    content += `<audio controls src="${audioUrl}" style="width:100%; max-width:100%; margin-top:5px;"></audio>`;
  } else if (audioBase64) {
    const audioSrc = `data:audio/webm;base64,${audioBase64}`;
    content += `<audio controls src="${audioSrc}" style="width:100%; max-width:100%; margin-top:5px;"></audio>`;
  }else {
    content += text;
  }

  content += `<small>${time}</small>`;
  div.innerHTML = content;

  const msgBox = document.getElementById("messages");
  msgBox.appendChild(div);
  msgBox.scrollTop = msgBox.scrollHeight;
}

function cleanupOldRooms() {
  db.ref("rooms").once("value").then(snapshot => {
    const rooms = snapshot.val();
    if (!rooms) return;
    const now = Date.now();
    for (const code in rooms) {
      if (code === STATIC_ROOM) continue;
      const room = rooms[code];
      if (now - (room.created || 0) > 2 * 60 * 1000) {
        db.ref("rooms/" + code).remove();
      }
    }
    // Clean old anti-spam tracking
    db.ref("antispam").once("value").then(snapshot => {
      const data = snapshot.val();
      if (!data) return;
      for (const room in data) {
        if (room !== STATIC_ROOM) db.ref(`antispam/${room}`).remove();
      }
    });

    db.ref("antispamBlocked").once("value").then(snapshot => {
      const data = snapshot.val();
      if (!data) return;
      for (const room in data) {
        if (room !== STATIC_ROOM) db.ref(`antispamBlocked/${room}`).remove();
      }
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("msgInput");
  if (input) {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        sendMessage();
      }
    });
  }
});
function showScreen(id) {
  ["usernameScreen", "roomChoiceScreen", "codeEntryScreen", "chatScreen", "passwordScreen", "profileScreen"].forEach(s => {
    document.getElementById(s).style.display = "none";
  });
  document.getElementById(id).style.display = "flex";
}

function genRoomCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const get = (set, len) => Array.from({ length: len }, () => set[Math.floor(Math.random() * set.length)]).join('');
  return get(digits, 3) + get(chars, 3) + get(digits, 2) + get(chars, 2);
}

function startInactivityTimer() {
  setInterval(() => {
    if (Date.now() - lastActivity > 5 * 60 * 1000 && roomCode !== STATIC_ROOM) {
      db.ref("rooms/" + roomCode).update({ active: false });
      alert("Session expired.");
      location.reload();
    }
  }, 30000);
}

function setupSidebarBackHandler() {
  window.addEventListener("popstate", () => {
    const sidebar = document.getElementById("userSidebar");
    if (sidebar?.classList.contains("show")) {
      sidebar.classList.remove("show");
    }
  });
}

function toggleSidebar() {
  const sidebar = document.getElementById("userSidebar");
  if (!sidebar.classList.contains("show")) {
    sidebar.classList.add("show");
    history.pushState({ sidebarOpen: true }, "");
  } else {
    sidebar.classList.remove("show");
    if (history.state?.sidebarOpen) history.back();
  }
}

function setupVisibilityAttention() {
  let unread = 0;
  let originalTitle = document.title;

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      document.title = originalTitle;
      unread = 0;
    }
  });

  window.flagPageAttention = function () {
    if (document.hidden) {
      unread++;
      document.title = `(${unread}) New message • ${originalTitle}`;
    }
  };
}
function tryEditProfile() {
  const sanitized = sanitizeUsername(username);
  db.ref(`profiles/${sanitized}`).get().then(snap => {
    const data = snap.val();
    if (!data) return alert("Profile not found.");

    const last = data.lastChanged || 0;
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (now - last < oneDay) {
      const left = Math.ceil((oneDay - (now - last)) / (60 * 1000));
      alert(`You can change your profile again in ${left} minutes.`);
    } else {
      showScreen("profileScreen");
      document.getElementById("profileUsernameInput").value = username;
      document.getElementById("profileDescriptionInput").value = data.description || "";
    }
  });
}

function listenForUserList() {
  db.ref(`users/${roomCode}`).on("value", snap => {
    const users = snap.val() || {};
    const now = Date.now();
    const html = Object.values(users).map(user => {
      const isOnline = user.online;
      const seen = now - user.lastOnline <= 30 * 60 * 1000;
      if (!isOnline && !seen) return "";

      const color = isOnline ? "#00ff88" : "#888";
      const status = isOnline ? "🟢" : "🕒";
      const lastSeen = new Date(user.lastOnline).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return `<li style="color:${color};cursor:pointer;" onclick="viewProfile('${sanitizeUsername(user.username)}')">${status} ${user.username}</li>`;
    }).join("");
    document.getElementById("userList").innerHTML = html;
  });
}
function sendTyping(stop = false) {
  const path = `rooms/${roomCode}/typing/${clientId}`;
  if (stop) {
    db.ref(path).remove();
  } else {
    db.ref(path).set(username);
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
      db.ref(path).remove();
    }, 3000);
  }
}

function listenForTyping() {
  const el = document.getElementById("typing");
  db.ref(`rooms/${roomCode}/typing`).on("value", snap => {
    const data = snap.val();
    if (!data) return (el.innerText = "");
    const others = Object.values(data).filter(name => name !== username);
    el.innerText = others.length ? `${others.join(", ")} typing...` : "";
  });
}

function trackPresence() {
  if (!username || !roomCode) return;
  const userKey = sanitizeUsername(username);
  const userRef = db.ref(`users/${roomCode}/${userKey}`);

  const data = {
    username,
    lastOnline: firebase.database.ServerValue.TIMESTAMP,
    online: true
  };

  userRef.set(data);
  userRef.onDisconnect().update({
    online: false,
    lastOnline: Date.now()
  });
  updateOnlineIndicator();
}
function updateOnlineIndicator() {
  const statusEl = document.getElementById("onlineStatus");
  statusEl.innerText = "● Online";
  statusEl.style.color = "#00ff88";
}
setInterval(updateOnlineIndicator, 3000);
function viewProfile(userKey) {
  db.ref(`profiles/${userKey}`).get().then(snap => {
    if (!snap.exists()) return;
    const p = snap.val();
    const content = `
Name: ${p.username}
Description: ${p.description || "No bio set"}
History:
${(p.usernameHistory || []).join("\n")}
Last Changed: ${new Date(p.lastChanged).toLocaleString()}
    `.trim();
    document.getElementById("profileContent").innerText = content;
    document.getElementById("profileViewer").style.display = "block";
  });
}
function initUsernameFlow() {
  const stored = localStorage.getItem("chat_username");

  if (!stored) {
    showScreen("profileScreen");
  } else {
    username = stored;
    document.getElementById("namePreview").innerText = username;
    showScreen("roomChoiceScreen");
  }
}
function closeProfile() {
  document.getElementById("profileViewer").style.display = "none";
}