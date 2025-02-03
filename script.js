var guessNumber = document.getElementById("guessnumber");
        var result = document.getElementById("result");
        var score = document.getElementById("score");
        var randomNumber = Math.floor(Math.random() * 10) + 1;
        var totalScore = 10;

        function check() {
            var enteredNumber = parseInt(guessNumber.value);
            if (enteredNumber === randomNumber) {
                result.textContent = "Right! 🎉";
                result.style.color = "green";
                alert("YOU WON!");
            } else {
                totalScore -= 1;
                score.textContent = "Score: " + totalScore;
                result.textContent = "Wrong! ❌ Try again.";
                result.style.color = "red";
            }
        }