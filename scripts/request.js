// Async and Await version of getPuzzle function
const getPuzzleAwait = async (wordCount) => {
  try {
    const response = await fetch(
      `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
    );
    if (response.status === 200) {
      const data = await response.json();
      return data.puzzle;
    }
  } catch (error) {
    console.log(error);
  }
};
// New way using fetch & promise
// const getPuzzleFetch = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error("unable to fetch puzzle");
//         }
//     }).then((data) => {
//         return data.puzzle;
//     })
// }

// Old way using new & XMLHttpRequest

// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()
//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             resolve(data.puzzle);
//         } else if (e.target.readyState === 4) {
//             reject('An error has taken place');
//         }
//     })
//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })

// Challenge #109
// 1. Create a new function for getting country details
// 2. Call it with two arguments: country code. the callback function
// 3. Make the HTTP request and call the callback with country information
// 4. Use the callback to print the country name

// function for getting country info
// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest();
//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             const country = data.find((obj) => obj.alpha2Code === countryCode);
//             resolve(country);
//         } else if (e.target.readyState === 4) {
//             reject("Unable to fetch data");
//         }
//     })
//     countryRequest.open('GET', "https://Restcountries.com/v2/all")
//     countryRequest.send();
// })

// challenge #118
// 1. Convert getCountry to an async function that uses await
// 2. Convert getLocation to an async function that uses await

// challenge #118 B
// 1. Create a new function called getCurrentCountry
// 2. Should return a promise that resolves the country object for your current location
// 3. Use async/await for the new function

// const getCurrentCountry = async () => {
//   const location = await getLocationAsyncAwait();
//   return getCountryAsyncAwait(location.country);
// };

// const getCountryAsyncAwait = async (countryCode) => {
//   const response = await fetch("https://Restcountries.com/v2/all");
//   if (response.status === 200) {
//     const data = await response.json();
//     return data.find((obj) => obj.alpha2Code === countryCode);
//   } else {
//     throw new Error("Unable to fetch data");
//   }
// };

// const getLocationAsyncAwait = async () => {
//   const response = await fetch("https://ipinfo.io/json?token=cece9deafc9ae9");
//   if (response.status === 200) {
//     // in this function, no need to await and save to a variable. I can simply return the data.
//     return response.json();
//   } else {
//     throw new Error("Unable to fetch data");
//   }
// };

// const getCountryFetch = (countryCode) => {
//   return fetch("https://Restcountries.com/v2/all")
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Unable to fetch data");
//       }
//     })
//     .then((data) => {
//       return data.find((obj) => obj.alpha2Code === countryCode);
//     });
// };

// Challenge #116
// 1. Create getLocation function which takes no arguments
// 2. Setup getLocation to make a request to the url and parse the data
// 3. Use getLocation to print the city, region, and country information

// this is my URL
// https://ipinfo.io/json?token=cece9deafc9ae9

// const getLocation = () => {
//   return fetch("https://ipinfo.io/json?token=cece9deafc9ae9").then(
//     (response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Unable to fetch data");
//       }
//     }
//   );
// }
