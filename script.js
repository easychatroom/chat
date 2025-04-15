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
  
  let roomCode = '';
  let clientId = generateClientId();
  let lastActivity = Date.now();
  
  const messageDisplay = document.getElementById("messages");
  
  function generateRoomCode() {
    const code = genCode();
    roomCode = code;
    db.ref("rooms/" + code).set({ active: true, created: Date.now() });
    document.getElementById("status").innerText = `Room Created: ${code}`;
    openChat();
  }
  
  function joinRoom() {
    const code = document.getElementById("roomCodeInput").value.toUpperCase();
    db.ref("rooms/" + code).get().then((snap) => {
      if (snap.exists() && snap.val().active) {
        roomCode = code;
        document.getElementById("status").innerText = `Joined Room: ${code}`;
        openChat();
      } else {
        alert("Room code is invalid or inactive.");
      }
    });
  }
  
  function openChat() {
    document.getElementById("room-controls").style.display = "none";
    document.getElementById("chat").style.display = "flex";
    document.getElementById("roomDisplay").innerText = roomCode;
    listenForMessages();
    startInactivityTimer();
  }
  
  function sendMessage() {
    const input = document.getElementById("msgInput");
    const msg = input.value.trim();
    if (!msg) return;
    const key = db.ref().push().key;
    db.ref(`rooms/${roomCode}/messages/${key}`).set({
      msg,
      senderId: clientId,
      timestamp: Date.now()
    });
    input.value = '';
    lastActivity = Date.now();
  }
  
  function listenForMessages() {
    db.ref(`rooms/${roomCode}/messages`).on('child_added', (snapshot) => {
      const { msg, senderId } = snapshot.val();
      const sent = senderId === clientId;
      addMessage(msg, sent);
  
      // Remove message only after both clients received it
      setTimeout(() => {
        db.ref(`rooms/${roomCode}/messages/${snapshot.key}`).remove();
      }, 500); // brief delay to allow second listener to catch
      lastActivity = Date.now();
    });
  }
  
  function addMessage(text, sent) {
    const div = document.createElement("div");
    div.classList.add("msg", sent ? "sent" : "received");
    div.textContent = text;
    messageDisplay.appendChild(div);
    messageDisplay.scrollTop = messageDisplay.scrollHeight;
  }
  
  function genCode() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    return (
      randomChars(digits, 3) +
      randomChars(chars, 3) +
      randomChars(digits, 2) +
      randomChars(chars, 2)
    );
  }
  
  function randomChars(str, len) {
    return Array.from({ length: len }, () => str[Math.floor(Math.random() * str.length)]).join('');
  }
  
  function generateClientId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  
  function startInactivityTimer() {
    setInterval(() => {
      if (Date.now() - lastActivity > 5 * 60 * 1000) {
        db.ref("rooms/" + roomCode).update({ active: false });
        alert("Session expired due to inactivity.");
        location.reload();
      }
    }, 30000);
  }
  