(function()
{
    'use strict';
    console.log('reading js');

    // variables

    const start = document.querySelector('#start');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions')

    const gameData = 
    {
        assessment: ['approve', 'deny'],
        players: ['player 1', 'player 2'], // can also be set with form data, can also be multiple players
        score: [0, 0], 

        sum: 0,
        index: 0,
        // gameEnd: 29
    };
}
)();