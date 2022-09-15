"use strict";
// challenge #90: make a hangman game.

// 1. Create a constructor function for the hangman game
// 2. Setup two attributes. One for the word itself. Another for the number of guesses allowed
// 3. Create two instances of it and print both to the console.

// challenge #92
// 1. Set up the word instance property as an array of lower case letters
// 2. Set up another instance property to store guessed letters
// 3. Create a method that gives you the word puzzle back
// No guesses? => ***
// Guessed "c", "b", and "t"? => c*t

// Challenge #96 - Create a method for making a guesa
// 1. Should accept a character for guessing
// 2. Should add unique guesses to list of guesses
// 3. Should decrement the guesses left if a unique guess isn't a match

// Challenge #97
// 1. Display the puzzle to the browser instead of the console
// 2. Display the guesses left to the browser instead of console
// 3. Separate the Hangman definition from the rest of the app code (use app.js)

// Challenge #99 - Rewrite everything using class

// challenge #101
// 1. Convert "getStatusMessage" to a custom getter for "statusMessage"
// 2. Conver "getPuzzle" to a custom getter for "puzzle"
// 3. Change usage in app.js

class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.currentResult = "";
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = "playing";
  }

  get statusMessage() {
    if (this.status === "playing") {
      return `You have ${this.remainingGuesses} guesses left.`;
    } else if (this.status === "failed") {
      return `Nice try! The word was "${this.word.join("")}"`;
    } else {
      return "Great work! You guessed the word!";
    }
  }

  didGetAnswer() {
    // Best way to check this is use .every()
    const finished = this.word.every(
      (letter) => this.guessedLetters.includes(letter) || letter === " "
    );

    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }

  get puzzle() {
    let puzzle = "";
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter)) {
        puzzle += letter;
      } else if (letter === " ") {
        puzzle += " ";
      } else {
        puzzle = puzzle + "*";
      }
    });
    return puzzle;
  }

  guess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    // if that status is not playing, the code below return will not run
    if (this.status !== "playing") {
      return;
    }

    if (isUnique) {
      this.guessedLetters.push(guess);
    }

    if (isUnique && isBadGuess) {
      this.remainingGuesses -= 1;
    }

    this.didGetAnswer();
  }

  showRemainingGuesses() {
    return `You have ${this.remainingGuesses} tries left.`;
  }
}

// This is the constructor function to create a new game
// const HangmanOld = function (word, remainingGuesses) {
//     this.word = word.toLowerCase().split(''); // [c, a, t]
//     // this.guesses = [];
//     this.currentResult = '';
//     this.remainingGuesses = remainingGuesses;
//     this.guessedLetters = [];
//     this.status = "playing";

// }

// // Print status
// HangmanOld.prototype.getStatusMessage = function () {

//     if (this.status === 'playing') {
//         return `You have ${this.remainingGuesses} guesses left.`;
//     } else if (this.status === 'failed') {
//         return `Nice try! The word was "${this.word.join('')}"`
//     } else {
//         return 'Great work! You guessed the word!'
//     }

// }

// // method to check if a player guessed all letters correctly
// HangmanOld.prototype.didGetAnswer = function() {
//     // Best way to check this is use .every()
//     const finished = this.word.every((letter) => this.guessedLetters.includes(letter));

//     if (this.remainingGuesses === 0) {
//         this.status = 'failed';
//     } else if (finished) {
//         this.status = 'finished';
//     } else {
//         this.status = 'playing';
//     }
// }

//     /* Alternative ways to check if the player guessed correctly

//     1) Using forEach
//         let finished = true;
//         this.word.forEach((letter) => {
//             if (this.guessedLetters.includes(letter)) {
//             } else {
//                 finished = false;
//             }
//         })

//     2) Using filter
//         const lettersUnguessed = this.word.filter((letter) => {
//             return !this.guessedLetters.includes(letter);
//         })

//         const finished = lettersUnguessed.length === 0;

//     */

// // this lets you get the puzzle
// HangmanOld.prototype.getPuzzle = function () {
//     let puzzle = ''
//     this.word.forEach((letter) => {
//         if (this.guessedLetters.includes(letter)) {
//             puzzle += letter;
//         } else if (letter === ' ') {
//             puzzle += ' '
//         } else {
//             puzzle = puzzle + '*';
//         }

//     })
//     return puzzle;
// }

// // This lets you guess a letter
// HangmanOld.prototype.guess = function (guess) {
//     guess = guess.toLowerCase()
//     const isUnique = !this.guessedLetters.includes(guess);
//     const isBadGuess = !this.word.includes(guess);

//     // if that status is not playing, the code below return will not run
//     if (this.status !== 'playing') {
//         return
//     }

//     if (isUnique) {
//     this.guessedLetters.push(guess);
//     }

//     if (isUnique && isBadGuess) {
//         this.remainingGuesses -= 1;
//     }

//     this.didGetAnswer();

// }

// // This lets you see how many guesses left
// HangmanOld.prototype.showRemainingGuesses = function() {
//     return `You have ${this.remainingGuesses} tries left.`
// }

// Generate DOM to show the puzzle in the browser
// const createPuzzleDOM = (puzzle) => {
//     const puzzleEl = document.createElement('div');
//     document.querySelector('#button').addEventListener('click', () => {

//         puzzleEl.appendChild(puzzle);
//         //puzzle.getPuzzle()

//     })
// }

//const game2 = new Hangman('New Jersey', 4);

// console.log('game1 is ', game1);
// console.log('game2 is ', game2);
// console.log(game2.getPuzzle());

// This is a helper function to display the result of guessing
// Hangman.prototype.showResult = function() {
//     let currentResult = '';
//     this.word.forEach((char) => {
//         // iterate guessed letter arr, check if they are present in word
//         for (let i = 0; i < this.guessedLetters.length; i++) {
//             console.log(this.guessedLetters[i]);
//             if (this.guessedLetters[i] === char) {
//             currentResult += char;
//             } else if (char === ' ') {
//             currentResult += ' ';
//             } else {
//             currentResult += '*'
//             }
//         }

//     })

//     this.currentResult = currentResult;
//     return currentResult;
// }
