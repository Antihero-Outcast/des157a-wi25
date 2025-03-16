(function()
{
    'use strict';
    console.log('reading js');

    // variables

    const start = document.querySelector('#start');
    const exit = document.querySelector('#exit');
    const exitImg = document.querySelector('#exit img');
    const guide = document.querySelector('#guide');
    const overlay = document.querySelector('#overlay');
    const approve = document.querySelector('#approve');
    const deny = document.querySelector('#deny');
    // const gameControl = document.querySelector('#gamecontrol');
    // const game = document.querySelector('#game');
    // const actionArea = document.querySelector('#actions')
    const timer = document.querySelector('#timer');
    const boDY = document.querySelector('body');
    const alertMsg = document.querySelector('#alert-msg');
    const okBtn = document.querySelector('#ok');
    let p1SuccessRate = document.querySelector('#p1-success-rate');
    let p2SuccessRate = document.querySelector('#p2-success-rate');
    const playerTurn = document.querySelector('.player-turn');

    const gameData = {
        assessment: ['approve', 'deny'], // Possible choices
        players: ['player 1', 'player 2'], // Players
        successRate: [100, 100], // Each player starts at 100%
        currentApplicant: null, // Stores the visa card being processed
        round: 0, // Tracks rounds (0 to 4, since there are 5 total)
        index: 0, // Tracks whose turn it is (0 = Player 1, 1 = Player 2)
        timer: 10, // Starting time limit (decreases each round)
        
        playerApplicants: 
        { 
            // Each player gets 5 visa cards
            player1: 
            [
                { image: "p1c1.png", isValid: false },
                { image: "p1c2.png", isValid: false },
                { image: "p1c3.png", isValid: true },
                { image: "p1c4.png", isValid: false },
                { image: "p1c5.png", isValid: true }
            ],
            player2: 
            [
                { image: "p2c1.png", isValid: true },
                { image: "p2c2.png", isValid: true },
                { image: "p2c3.png", isValid: false },
                { image: "p2c4.png", isValid: true },
                { image: "p2c5.png", isValid: false }
            ]
        }
    };

    okBtn.addEventListener('click', function()
    {
        alertMsg.style.display = 'none';
    });

    guide.addEventListener('mouseover', function()
    {
        guide.setAttribute('src', 'images/guide/guide-hover.png');
        guide.style.left = '83.75%';
    });

    guide.addEventListener('mouseout', function()
    {
        guide.setAttribute('src', 'images/guide/guide-collapsed.png');
        guide.style.left = '85%';
    });

    guide.addEventListener('click', function()
    {
        guide.setAttribute('src', 'images/guide/guide-open.png');
    });

    exit.addEventListener('mouseover', function()
    {
        exitImg.setAttribute('src', 'images/lines/arrow2.svg');
    });

    exit.addEventListener('mouseout', function()
    {
        exitImg.setAttribute('src', 'images/lines/arrow1.svg');
    });

    start.addEventListener('click', function() {
        start.style.display = 'none'; // Hide start button
        setTurn(); // Start the next turn
    }); 

    function getCurrentApplicant() {
        let currentPlayer = gameData.index === 0 ? "player1" : "player2";
        return gameData.playerApplicants[currentPlayer][gameData.round];
    }     

    approve.addEventListener("click", function() {
        validateDecision(true);
    });
    
    deny.addEventListener("click", function() {
        validateDecision(false);
    });    

    function validateDecision(playerDecision) {
        let applicant = gameData.currentApplicant;
        let isCorrect = (playerDecision === applicant.isValid);
        let visaCard = document.getElementById("visa-card");
    
        // Apply aura effect based on correctness
        if (isCorrect) {
            gameData.successRate[gameData.index] = Math.min(gameData.successRate[gameData.index] + 5, 100);
            visaCard.classList.add("correct-aura");
            playSound("correct");
        } else {
            gameData.successRate[gameData.index] -= 10;
            visaCard.classList.add("incorrect-aura");
            playSound("incorrect");
        }
    
        // Update displayed success rates
        updateSuccessRateDisplay();
    
        setTimeout(() => {
            visaCard.classList.remove("correct-aura", "incorrect-aura"); // Remove aura
            overlay.style.display = "none"; // Close overlay
    
            switchTurn(); // Move to the next player properly
    
        }, 1000); // Wait 1 second for animation before switching
    }

    function updateSuccessRateDisplay() {
        let successRates = [p1SuccessRate, p2SuccessRate];
    
        successRates.forEach((rate, index) => {
            let success = gameData.successRate[index];
            rate.textContent = `${success}%`;
    
            if (success > 75) {
                rate.style.color = "green";
            } else if (success === 75) {
                rate.style.color = "yellow";
            } else {
                rate.style.color = "red";
            }
        });
    }      
    
    // function playSound(type) {
    //     let sound = document.getElementById(type === "correct" ? "correct-sound" : "incorrect-sound");
    //     sound.play();
    // }    
      
    // Timer fixed to use gameData.timer
    function startTimer() {
        let timeLeft = gameData.timer; // Use gameData.timer for each round's countdown
        let timerDisplay = document.getElementById("seconds");
        timerDisplay.textContent = `${timeLeft}s`;
        
        let countdown = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `${timeLeft}s`;
        
            if (timeLeft <= 0) {
                clearInterval(countdown);
                validateDecision(false); // Auto-fail the player after timeout
            }
        }, 1000);
    }

    // Set the turn for a player
    function setTurn() {
        let applicant = getCurrentApplicant();
        gameData.currentApplicant = applicant;
        
        // Show the visa card
        document.getElementById("visa-card").src = `images/visa-ids/${applicant.image}`;
        overlay.style.display = "flex"; // Show overlay with applicant info
        
        // Update player turn
        playerTurn.textContent = `${gameData.players[gameData.index].toUpperCase()}'S TURN`;

        startTimer(); // Start the timer
    }
     
    // Update background image based on the player and round
    function updateBackground() {
        document.body.style.backgroundImage = `url('images/backgrounds/p${gameData.index + 1}r${gameData.round + 1}.jpg')`;
    }

    // Switch turns after each round
    function switchTurn() {
        gameData.index = gameData.index === 0 ? 1 : 0; // Toggle between Player 1 and Player 2
        
        // Only increase round count after both players have taken their turns
        if (gameData.index === 0) { 
            gameData.round++;
            if (gameData.round >= 5) {
                endGame();
                return;
            }
            updateBackground(); // Update background after the round changes
        }
        
        // Show the start button for the next player
        start.style.display = "block";
        playerTurn.textContent = `${gameData.players[gameData.index].toUpperCase()}, PRESS START TO CONTINUE`;
    }
    
    function endGame() {
        overlay.style.display = "none"; // Hide visa overlay
        playerTurn.textContent = "GAME OVER!";
    
        let winner;
        if (gameData.successRate[0] > gameData.successRate[1]) {
            winner = `${gameData.players[0]} WINS!`;
        } else if (gameData.successRate[1] > gameData.successRate[0]) {
            winner = `${gameData.players[1]} WINS!`;
        } else {
            winner = "IT'S A TIE!";
        }
    
        game.innerHTML = `<h2>${winner}</h2><button id="restart">PLAY AGAIN</button>`;
    
        document.getElementById("restart").addEventListener("click", function() {
            location.reload(); // Restart the game
        });
    }    
})();