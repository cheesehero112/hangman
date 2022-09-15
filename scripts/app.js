"use strict";

// HTTP (Hypertext Transfer Protocol)
// Request - what do we want to do
// Response - what was actually done

const puzzleEl = document.querySelector("#puzzle");
const guessEl = document.querySelector("#guesses");
let game1;
// puzzleEl.textContent = game1.puzzle;
// guessEl.textContent = game1.statusMessage;

window.addEventListener("keypress", (e) => {
  const guess = e.key;
  game1.guess(guess);
  render();
});

//challenge #122
// 1. for each character in the string, add a span into #puzzle
// 2. The spans text should just be the letter itself
const render = () => {
  puzzleEl.innerHTML = "";
  guessEl.textContent = game1.statusMessage;
  game1.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
  //   const splitPuzzle = game1.puzzle.split("");
  //   splitPuzzle.forEach((char) => {
  //     puzzleEl.innerHTML += `<span>${char}</span>`;
  //   });
};

const startGame = async () => {
  const puzzle = await getPuzzleAwait("2");
  game1 = new Hangman(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

//console.log(game1.getPuzzle())
// Print remaining guesses (should be 1)
// console.log(game1.showRemainingGuesses());

// getPuzzleAwait('2').then((puzzle) => {
//     console.log(puzzle);
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name);
// }).catch((err) => {
//     console.log(`Error: `, err);
// })

// challenge #116 2 - promise chain getLocation & getCountry to print the country you are in now.
// getLocationAsyncAwait().then((location) => {
//     return getCountryAsyncAwait(location.country);
// }).then((country) => {
//     console.log(country.name);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })

// challenge #116
// make getLocation function

// getLocation().then((location) => {
//     console.log(`Your city is: ${location.city}, your region is: ${location.region}, and your country is: ${location.country}`);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })

// challenge #115
// 1. Create getCountry to use fetch and return a promise
// 2. Make sure getCountry still resolves with the country that matches
// 3. Change getCountry usage to use catch

// getCountryFetch('JP').then((country) => {
//     console.log(country.name);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })

// calling getCountry function

// getCountry('JP').then((country) => {
//     console.log(`Country name: ${country.name}`);
//     }, (err) => {
//     console.log(`Error: ${err}`);
// });

// how to use fetch - it returns promises, so I can also chain .catch()

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         // if this code runs, .catch() runs automatically
//         throw new Error('Unable to fetch the puzzle');
//     }
// }).then((data) => {
//     console.log(data.puzzle);
// }).catch((error) => {
//     console.log(error);
// })

// // Making an HTTP request
// const request = new XMLHttpRequest()
// request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         console.log(data);
//     } else if (e.target.readyState === 4) {
//         console.log('An error has taken place');
//     }
// })
// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=2')
// request.send()

// // Challenge #106
// // 1. Make a new request for all countries
// // 2. Parse the responseText to get back the array of object
// // 3. Find your country object by it's country code (alpha2Code property)
// // 4. Print the full country name (name property)

// const countryRequest = new XMLHttpRequest();
// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const country = data.find((obj) => obj.alpha2Code === "JP");
//         console.log(country.name);
//     } else if (e.target.readyState === 4) {
//         console.log("Unable to fetch data");
//     }
// })
// countryRequest.open('GET', "http://api.countrylayer.com/v2/all?access_key=05faf6e6fec8b84097753775de246913")
// countryRequest.send();
