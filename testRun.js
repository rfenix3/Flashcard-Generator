
// Run this file to test the BasicCard and ClozeCard constructors.
// commandline: node testRun.js

var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log("BasicCard firstPresident.front is: " + firstPresident.front); 

// "George Washington"
console.log("BasicCard firstPresident.back is: " + firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log("firstPresidentCloze.cloze is: " + firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log("firstPresidentCloze.partial() is: " + firstPresidentCloze.partial()); 

// "George Washington was the first president of the United States.
console.log("firstPresidentCloze.fullText is: " + firstPresidentCloze.fullText); 

var TeslaCloze = new ClozeCard(
    "Tesla CEO Elon Musk is a famous engineer.", "Elon Musk");

// "Elon Musk"
console.log("TeslaCloze.cloze is: " + TeslaCloze.cloze); 

// "Tesla CEO ... is a famous engineer."
console.log("TeslaCloze.partial() is: " + TeslaCloze.partial()); 

// Tesla CEO Elon Musk is a famous engineer."
console.log("TeslaCloze.fullText is: " + TeslaCloze.fullText); 

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

console.log("brokenCLoze.partial is: " + brokenCloze.partial());
