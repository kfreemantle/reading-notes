//conditional logic

//function welcomeUser() {

    if (confirm('Please confirm you are agreeing to provide full-time care for this cat.  At your cost.  Indefinitely.')) {
        console.log("Pixel says muchas gracias!");
        let catColor = 'BLACK';
        let userName = prompt("What's your name, indefinite caregiver?", "");
            console.log(userName)
            let userGuess = prompt('What is the best cat color?');
            console.log("User guess is: " +userGuess);
            userGuess = userGuess.toUpperCase();
            if (userGuess == catColor) {
                console.log("Your favorite cat color is correct.");
                let userColorChoice = 'correct';
                } else {
                console.log("Incorrect. The best cat is black cat.");
                }
            
        
        } else {
            document.write("Pixel seems sad, but understanding. :(");
            location.href = 'https://seattleareafelinerescue.org/';
        }
//}

//function askAvailability(){
    let userDays = prompt('Are you available MWF or TTS?');
    userDays = userDays.toUpperCase();
    if (userDays == 'MWF') {
        console.log("User is available Monday/Wednesday/Friday.")
    } else if (userDays =='TTS') {
        console.log("User is available Tuesday/Thursday/Saturday.")
    } else {
        console.log("Invalid value for days available");
        userDays = prompt('Please indicate whether you are available MWF or TTS.');
        userDays = userDays.toUpperCase();
           console.log("User is available on " + userDays + ".")
    
    }
//}

//function askCoupons() {
    let couponCount = prompt('How many days total will you be taking care of Pixel, with a minimum of 6?');
    while (couponCount <= 5) {
        couponCount = prompt('Again, the minimum days is 6.  How many days can you take care of Pixel?');
        }

    for (let c = 0; c < couponCount; c++) {
        document.write('<img src=catfood.jpg>');
    }

//}

//        document.write(`Hola y gracias, ${name}!`)
//        const catColor = 'black';
//        let userGuess = prompt('What is the best cat color?');
//        if (userGuess == catColor) {
//            document.write('Your favorite cat color is correct!')
//        } else {
//            document.write("Your favorite cat color is incorrect.")
//        }
        

//if (userGuess == catColor) {
//    console.log("Heck yes!");
//})else if (userGuess == "orange") {
//    console.log("No, though he is about as bright.");
//}
//    )else if (userGuess == "Black") {
//        console.log("Yes, but with bad capitalization.");
//} else {
//    console.log('No, that is not correct.');
//}
