/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nconst searchfield1 = document.getElementById(\"searchfield1\");\r\nconst searchfield2 = document.getElementById(\"searchfield2\");\r\nconst searchfield3 = document.getElementById(\"searchfield3\");\r\nconst searchbtn2 = document.getElementById(\"searchbtn2\");\r\nconst searchBtn = document.getElementById(\"searchbtn\");\r\nconst searchField = document.getElementById(\"searchfield\");\r\nsearchBtn.addEventListener(\"click\", (e) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const searchedMovie = searchField.value;\r\n    const movie = yield fetchMovie(searchedMovie);\r\n    const countriesInfo = yield Promise.all(movie.countries.map((country) => __awaiter(void 0, void 0, void 0, function* () {\r\n        return yield fetchCountryInfo(country);\r\n    })));\r\n    document.getElementById(\"list\").insertAdjacentHTML(\"afterend\", `<li>${movie.movieAge}</li>\r\n    <li>${movie.actorFirstNames}</li>\r\n    <li> ${countriesInfo.map((country) => country.countryName)}</li>\r\n    <li> ${countriesInfo.map((country) => country.currencies[0])}</li>\r\n    <li><img src=${countriesInfo.map((country) => country.flag)}></li>`);\r\n}));\r\nfunction fetchMovie(name) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const movieName = name.trim();\r\n        const response = yield fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=a04f464f`);\r\n        const movieInfo = yield response.json().then((movie) => {\r\n            const actors = movie.Actors.split(\",\");\r\n            return {\r\n                countries: movie.Country.split(\",\"),\r\n                actorFirstNames: actors.map((actor) => actor.trim().split(\" \")[0]),\r\n                movieAge: new Date().getFullYear() - movie.Year,\r\n                duration: parseInt(movie.Runtime.split(\" \")[0]),\r\n            };\r\n        });\r\n        return movieInfo;\r\n    });\r\n}\r\nfunction fetchCountryInfo(country) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const response = yield fetch(`https://restcountries.com/v3.1/name/${country}`);\r\n        const countryInfo = yield response.json().then((country) => {\r\n            return {\r\n                population: country[0].population,\r\n                countryCode: country[0].cca2,\r\n                currencies: Object.keys(country[0].currencies),\r\n                flag: `https://flagpedia.net/data/flags/icon/36x27/${country[0].cca2.toLowerCase()}.png`,\r\n                countryName: country[0].name.common,\r\n            };\r\n        });\r\n        return countryInfo;\r\n    });\r\n}\r\nsearchbtn2.addEventListener(\"click\", (e) => __awaiter(void 0, void 0, void 0, function* () {\r\n    let movies = [];\r\n    let searchBoxes = document.getElementsByClassName(\"movieSearch\");\r\n    [...searchBoxes].forEach((movie) => {\r\n        let movieName = movie.value;\r\n        if (movieName.length > 0) {\r\n            movies.push(movieName);\r\n        }\r\n    });\r\n    const moviesInfo = yield Promise.all(movies.map((movie) => __awaiter(void 0, void 0, void 0, function* () {\r\n        return yield fetchMovie(movie);\r\n    })));\r\n    // გთხოვთ ამის HTML/CSS-ს ნუ მაწერინებთ (სანამ ვისწავლი :))\r\n    let moviesDuration = moviesInfo.reduce((previousValue, currentValue) => {\r\n        return previousValue + currentValue.duration;\r\n    }, 0);\r\n    console.log(`Movies duration ${moviesDuration}`);\r\n}));\r\n\n\n//# sourceURL=webpack://test/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;