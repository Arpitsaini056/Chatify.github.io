// Sample contacts data (In real app, this will come from the mobile contacts API or backend)
let contacts = [
    { name: "User 1", id: 1 },
    { name: "User 2", id: 2 },
    { name: "User 3", id: 3 },
    { name: "User 4", id: 4 },
    { name: "User 5", id: 5 }
];

// Function to load contacts into the chat list
function loadContacts() {
    let chatList = document.getElementById("chatList");
    chatList.innerHTML = "";  // Clear previous list

    contacts.forEach(contact => {
        let contactDiv = document.createElement("div");
        contactDiv.classList.add("chat-item");
        contactDiv.onclick = () => openChat(contact.name); // Pass the name
        contactDiv.innerHTML = `<p>${contact.name}</p>`;
        chatList.appendChild(contactDiv);
    });
}

// Function to open chat with a user and redirect to chat page
function openChat(userName) {
    // Redirect to the chat.html page with the selected user's name as a query parameter
    window.location.href = `chat.html?user=${userName}`;
}

// Function to search through contacts
function searchContacts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(input));

    let chatList = document.getElementById("chatList");
    chatList.innerHTML = "";  // Clear previous list

    filteredContacts.forEach(contact => {
        let contactDiv = document.createElement("div");
        contactDiv.classList.add("chat-item");
        contactDiv.onclick = () => openChat(contact.name); // Pass the name
        contactDiv.innerHTML = `<p>${contact.name}</p>`;
        chatList.appendChild(contactDiv);
    });
}

// Initial load of contacts when page loads
window.onload = loadContacts;
