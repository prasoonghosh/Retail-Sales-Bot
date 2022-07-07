function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello" || "hi") {
        return "Hello there! Would you like to book your vehicle?";
    }
    else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else {
        return "Try asking something else!";
    }
}