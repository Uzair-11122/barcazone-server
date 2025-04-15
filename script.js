// Basic AI Chatbot Functionality
document.getElementById('chatbot-send').addEventListener('click', function () {
    const input = document.getElementById('chatbot-input').value;
    const messages = document.getElementById('chatbot-messages');

    if (input.trim() === "") return;

    // Display user message
    messages.innerHTML += `<div><strong>You:</strong> ${input}</div>`;

    // Simple AI response
    let response = "I'm sorry, I can't answer that right now. Ask me about FC Barcelona!";
    if (input.toLowerCase().includes("transfer")) {
        response = "Barcelona has been active in the transfer market. Check the Transfers section for updates!";
    } else if (input.toLowerCase().includes("news")) {
        response = "Stay updated with the latest news in the News section!";
    } else if (input.toLowerCase().includes("history")) {
        response = "FC Barcelona has a rich history. Check out our Blogs section for more!";
    }

    // Display AI response
    messages.innerHTML += `<div><strong>BarcaBot:</strong> ${response}</div>`;

    // Clear input
    document.getElementById('chatbot-input').value = "";

    // Scroll to bottom of messages
    messages.scrollTop = messages.scrollHeight;
});