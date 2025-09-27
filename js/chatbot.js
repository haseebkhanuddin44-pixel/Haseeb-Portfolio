// Chat Bot Functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatBotButton = document.querySelector('.chat-bot-button');
    const chatBotWindow = document.querySelector('.chat-bot-window');
    const chatBotClose = document.querySelector('.chat-bot-close');
    const chatMessages = document.querySelector('.chat-bot-messages');
    const chatInput = document.querySelector('.chat-bot-input input');
    const chatSendButton = document.querySelector('.chat-bot-input button');

    // Predefined responses
    const botResponses = {
        'hello': 'Hello! How can I help you today?',
        'hi': 'Hi there! How can I assist you?',
        'hey': 'Hey! What can I do for you?',
        'help': 'I can help you navigate the portfolio, answer questions about projects, or connect you with Haseeb. What would you like to know?',
        'about': 'This portfolio showcases Haseeb Khan\'s work and skills. Check out the About page for more information!',
        'projects': 'You can view all projects on the Projects page. Would you like me to tell you about a specific project?',
        'contact': 'You can reach out through the Contact page or directly email at contact@myportfolio.com',
        'skills': 'Haseeb is skilled in web development, including HTML, CSS, JavaScript, and various frameworks.',
        'experience': 'For detailed information about work experience, please check the About page.',
        'education': 'Haseeb has a background in Computer Science. More details are available on the About page.',
        'default': 'I\'m not sure I understand. Could you rephrase or ask something else?'
    };

    // Toggle chat window
    chatBotButton.addEventListener('click', function() {
        chatBotWindow.style.display = chatBotWindow.style.display === 'flex' ? 'none' : 'flex';
        if (chatBotWindow.style.display === 'flex' && chatMessages.children.length === 0) {
            // Initial greeting
            addBotMessage('Hi there! 👋 I\'m your virtual assistant. How can I help you today?');
        }
    });

    // Close chat window
    chatBotClose.addEventListener('click', function() {
        chatBotWindow.style.display = 'none';
    });

    // Send message on button click
    chatSendButton.addEventListener('click', sendMessage);

    // Send message on Enter key
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Function to send message
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message !== '') {
            // Add user message to chat
            addUserMessage(message);
            
            // Clear input
            chatInput.value = '';
            
            // Get bot response after a short delay
            setTimeout(() => {
                const response = getBotResponse(message);
                addBotMessage(response);
            }, 500);
        }
    }

    // Function to add user message to chat
    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', 'user-message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        scrollToBottom();
    }

    // Function to add bot message to chat
    function addBotMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', 'bot-message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        scrollToBottom();
    }

    // Function to get bot response
    function getBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check for keywords in the message
        for (const keyword in botResponses) {
            if (lowerMessage.includes(keyword)) {
                return botResponses[keyword];
            }
        }
        
        // If no keyword matches, return default response
        return botResponses.default;
    }

    // Function to scroll chat to bottom
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});