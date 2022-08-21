function getBotResponse(input) {
    //objects of four wheeler vehicles
    var Cars= ["Maruti Brezaa","Hyundai i20","Mahindra Scorpio","Maruti Suzuki Swift","Honda City"]

    
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    var category = ["Two Wheelers ", "Four Wheelers"]

    // Simple responses
    if (input == "hello") {
        return "Hello there! Would you like to rent your vehicle?";
    } 
    else if(input == "yes"){
        return "Please enter your age."
    }
    else if(input == "no"){
        return "Good bye"
    }
    else if(input >= 18){
        return "You are eligible for renting your vehicle. Please enter your name"
    }
    else if(input <= 18){
        return "Sorry, you are not eligible to rent a vahicle."
    }
    else if(input == "prasoon"){
        return "Please choose your category:\n Two Wheelers \n Four Wheelers";
    }
    else if(input == "four wheelers"){
        return "Choose your vehicle: " + Cars;
    }
    if(input == Cars){
        return "Enter the date of renting"
    }
    else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}