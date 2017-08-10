var color=["red","orange","yellow","green","blue","indigo", "violet"];
	var computerGuess = color[0];
	console.log('Computer selected ' + computerGuess);
	var wins=0;
	var loses=0;
	var attemptsLeft=9;
    var indexOfCurrentColor=0;
	var wrongLetters = [];
    var eachColor = computerGuess.split("");
    var guessedWord = [];

    initialzeGuessWord();
	//while(attemptsLeft > 0) {
    checkGuessedWord();

    function checkGuessedWord() {
        printEveryThing(attemptsLeft, wrongLetters, guessedWord);
     document.onkeyup = function(event) {
         var userGuess = event.key;
        
        if(wrongLetters.indexOf(userGuess) == -1 && guessedWord.indexOf(userGuess) == -1) {
            
      //var computerGuess = computerColor[Math.floor(Math.random() * computerColor.length)];
         // for (var i = 0; i <=color.length; i++) {
            //console.log(color[i]);
            
            var userTypedWrite = eachColor.indexOf(userGuess) != -1;

            // for (var i = 0; i <eachColor.length; i++) {
            //  console.log(eachColor[i]);
            //  if(userGuess===eachColor[i]){
            //      userTypedWrite = true;
            //      break;
          //       }
             // }

             

             if(userTypedWrite) {
                addToGuessedWord(guessedWord, userGuess, eachColor);
             } else {
                wrongLetters.push(userGuess);
             }

            attemptsLeft--;

            printEveryThing(attemptsLeft, wrongLetters, guessedWord);

            if(isEqual(eachColor,guessedWord)) {
                indexOfCurrentColor++;
                wins++;
                resetAndStartOver();
                console.log('You are the winner');
            }

            if(attemptsLeft == 0) {
                indexOfCurrentColor++;
                loses++;
                resetAndStartOver();
                console.log('You are the looser');
            }

            if(indexOfCurrentColor == 6) {
                indexOfCurrentColor = 0;
                resetAndStartOver()
                console.log("GAME OVER.....STARTING OVER");

            }
         }
    //  }

    }
       
    }

    function resetAndStartOver() {
        console.log("Number of wins: " + wins + " Number of losses: " + loses)
        document.getElementById("loses").innerHTML="loses : "+loses;
        document.getElementById("wins").innerHTML = "Wins : "+wins;
        attemptsLeft = 9;
        wrongLetters=[];
        console.log('Starting over: new color: ' + color[indexOfCurrentColor] + ' new index: ' + indexOfCurrentColor)
        eachColor=color[indexOfCurrentColor];
        initialzeGuessWord();
    }

    function isEqual(arr1, arr2) {
        if(arr1.length != arr2.length) {
            return false;
        }
        for(var i=0; i < arr1.length; i++) {
            if(arr1[i] != arr2[i]) {
                return false;
            }
        }

        return true;
    }
	function printEveryThing(attemptsLeft, wrongLetters, guessedWord) {
		console.log('attemptsLeft: ' + attemptsLeft);
        document.getElementById("attempts").innerHTML="Attempts Left : "+attemptsLeft;
		console.log('Typed wrong letters');
			console.log(wrongLetters);
            document.getElementById("wrongLetters").innerHTML="Wrong Letters : "+wrongLetters;
			console.log('guessed word upto now');
			console.log(guessedWord);
            document.getElementById("guessedWord").innerHTML="Guessed Word : "+guessedWord;
            document.getElementById("guess").innerHTML=getString();
	}
	function addToGuessedWord(guessedWord, userGuess, eachColor) {
		for(var i=0; i < eachColor.length; i++) {
			if(eachColor[i] === userGuess) {
				guessedWord[i] = userGuess;
			}
		}
	}
    
    
    function initialzeGuessWord() {
        guessedWord = [];
        for(var i=0; i < eachColor.length; i++) {
            guessedWord.push('_');
           
        }
       
    }

    function getString(){
        var printThis = "";
        for (var i = 0; i <guessedWord.length; i++) {
          printThis+=" "+guessedWord[i];  
        };
        return printThis;
    }
    
    //computerGuess.forEach(checkGuessedWord());