//basic definitions

    
//conditional logic

 let name = ""
        if (confirm('Please confirm you are agreeing to provide full-time care for this cat.  At your cost.  Indefinitely.')) {
            console.log("Pixel says muchas gracias!");
            name = prompt("What's your name, indefinite caregiver?", "");
            const catColor = 'BLACK';
            let userGuess = prompt('What is the best cat color?');
            console.log("User guess is: " +userGuess);
            userGuess = userGuess.toUpperCase();
            if (userGuess == catColor) {
                console.log("Your favorite cat color is correct.");
                let userColorChoice = 'correct';
                } else {
                console.log("Incorrect. Pixel is a black cat.");
                }
            
        
        } else {
            document.write("Pixel seems sad, but understanding. :(");
            location.href = 'https://seattleareafelinerescue.org/';
        }
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
