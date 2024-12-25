let typingTimer; // Timer identifier
let typingDelay = 1000; // Time in milliseconds before typing status disappears

// Function to show typing status
function typingStatus() {
    const typingIndicator = document.getElementById("typingStatus");
    
    clearTimeout(typingTimer); // Reset the timer if user is typing
    typingIndicator.textContent = "User is typing..."; // Show typing status

    // Set a timer to hide typing status after the user stops typing for 'typingDelay' time
    typingTimer = setTimeout(() => {
        typingIndicator.textContent = ""; // Clear typing status
    }, typingDelay);
}

// Function to send message
function sendMessage() {
    const messageInput = document.getElementById("chatInput");
    const messageText = messageInput.value;
    
    if (messageText.trim() !== "") {
        const chatBox = document.getElementById("chatBox");
        const newMessage = document.createElement("div");
        newMessage.classList.add("message", "right");
        newMessage.textContent = messageText;
        chatBox.appendChild(newMessage);
        messageInput.value = ""; // Clear input field after sending message
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
    }
}

// Function to start video call
function startVideoCall() {
    alert("Video call started!");
    // Here you can add your logic for starting a video call (e.g., WebRTC)
}

// Function to start voice call
function startVoiceCall() {
    alert("Voice call started!");
    // Here you can add your logic for starting a voice call (e.g., WebRTC)
}

// Function to block the user
function blockUser() {
    const blockConfirmation = confirm("Are you sure you want to block this user?");
    if (blockConfirmation) {
        alert("User has been blocked.");
        // Here you can add your logic for blocking the user (e.g., disable chat, remove from list)
    }
}
