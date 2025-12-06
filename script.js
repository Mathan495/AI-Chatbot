document.addEventListener("DOMContentLoaded", () => {
    const chatmsg = document.querySelector(".Chat-message");
    const usinp = document.getElementById("user-input");
    const sentbtn = document.getElementById("btn");

    const botResponses = {
        hello: "Hello! How can I help You today?",
        hi: "Hi there! How can I assist you?",
        "how are you": "I'm doing well, thank you! How about you?",
        "what can you do":
            "I can answer simple questions and have basic conversations. Try asking me something!",
        bye: "Goodbye! Have a great day!",
        "who are you": "I'm your AI chatbot Application",
        default: "I'm not sure I understand. Could you try asking something else?"
    };
    function addMessage(message, isUser = false) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("message");
        msgDiv.classList.add(isUser ? "user-msg" : "bot-message");

        const messageText = document.createElement("p");
        messageText.textContent = message;
        msgDiv.appendChild(messageText);

        chatmsg.appendChild(msgDiv);
        chatmsg.scrollTop = chatmsg.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const lowermsg = userMessage.toLowerCase();

        for (const [key, value] of Object.entries(botResponses)) {
            if (lowermsg.includes(key)) {
                return value;
            }
        }
        return botResponses.default;
    }


    function sendmsg() {
        const message = usinp.value.trim();
        if (message) {
            addMessage(message, true);
            usinp.value = '';

            setTimeout(() => {
                const botResponse = getBotResponse(message);
                addMessage(botResponse);
            }, 500);
        }
    }
    sentbtn.addEventListener("click", sendmsg);

    usinp.addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
            sendmsg();
        }
    });

});

