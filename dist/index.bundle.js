"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nconst wrapper = document.querySelector('.wrapper');\n\nconst heading = document.createElement('h1');\nheading.className = 'project-title';\nheading.innerHTML = 'Leaderboard';\nwrapper.append(heading);\n\nconst container = document.createElement('div');\ncontainer.className = 'container';\nwrapper.append(container);\n\nconst scores = document.createElement('div');\nscores.className = 'scores';\n\n\nconst recentScores = document.createElement('p');\nrecentScores.className = 'recent-scores';\nrecentScores.innerHTML = 'Recent Scores';\n\nconst refreshBtn = document.createElement('button');\nrefreshBtn.setAttribute('type', 'button');\nrefreshBtn.className = 'refresh-btn';\nrefreshBtn.innerHTML = 'Refresh';\n\nconst showScoresTitle = document.createElement('div');\nshowScoresTitle.className = 'show-title';\n\nshowScoresTitle.append(recentScores);\nshowScoresTitle.append(refreshBtn);\nscores.append(showScoresTitle);\ncontainer.append(scores);\n\n//Add your score\nconst addScoreDiv = document.createElement('div');\nconst addScoreHeading = document.createElement('p');\naddScoreDiv.className = 'add-score-text';\naddScoreHeading.innerHTML = 'Add your score';\n\nconst inputFieldsWrapper = document.createElement('div');\ninputFieldsWrapper.className = 'input-field';\n\nconst name = document.createElement('input');\nname.setAttribute('type', 'text');\nname.placeholder = 'Your name';\n\nconst score = document.createElement('input');\nscore.setAttribute('type', 'text');\nscore.placeholder = 'Your score';\n\nconst submitBtn = document.createElement('button');\nsubmitBtn.setAttribute('type', 'submit');\nsubmitBtn.className = 'submit-btn';\nsubmitBtn.innerHTML = 'Submit';\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);