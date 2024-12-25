function confirmBlock() {
    // Handle block logic here (e.g., disable messaging, mute user)
    alert("User has been blocked.");
    // Redirect back to home or chat page
    window.location.href = "home.html";  // Or your desired redirect page
}

function cancelBlock() {
    // Cancel blocking and go back to chat
    window.location.href = "chat.html";  // Or your desired page
}
