// lists of questions
let iSurvivedQuestionsParagraph1 = ["question 1", "question 2", "question 3", "question 4"];
let iSurvivedQuestionsParagraph2 = ["question 1", "question 2", "question 3", "question 4"];
let iSurvivedQuestionsParagraph3 = ["question 1", "question 2", "question 3", "question 4"];
let iSurvivedQuestionsParagraph4 = ["question 1", "question 2", "question 3", "question 4"];
let iSurvivedQuestionsParagraph5 = ["question 1", "question 2", "question 3", "question 4"];

// lists of answers
let iSurvivedAnswersParagraph1 = ["answer 1", "answer 2", "answer 3", "answer 4"];
let iSurvivedAnswersParagraph2 = ["answer 1", "answer 2", "answer 3", "answer 4"];
let iSurvivedAnswersParagraph3 = ["answer 1", "answer 2", "answer 3", "answer 4"];
let iSurvivedAnswersParagraph4 = ["answer 1", "answer 2", "answer 3", "answer 4"];
let iSurvivedAnswersParagraph5 = ["answer 1", "answer 2", "answer 3", "answer 4"];

// lists of paragraphs
const iSurvivedParagraph1 = "This is the first paragraph of the book.";
const iSurvivedParagraph2 = "This is the second paragraph of the book.";
const iSurvivedParagraph3 = "This is the third paragraph of the book.";
const iSurvivedParagraph4 = "This is the fourth paragraph of the book.";
const iSurvivedParagraph5 = "This is the fifth paragraph of the book.";

// function to clear the screen of all html elements
function clearIntroScreen(){
    document.getElementById("introHeading").classList.add("hidden");
    document.getElementById("introHeading2").classList.add("hidden");
    document.getElementById("introButton").classList.add("hidden");
}

// function to show text after book is selected
function showParagraphs(){
    clearIntroScreen();
    document.getElementById("numParagraphsHeading2").classList.remove("hidden");
    document.getElementById("numParagraphsButton").classList.remove("hidden");
    document.getElementById("numParagraphsText").classList.remove("hidden");
    document.getElementById("numParagraphsHeading2").innerText = "How many paragraphs would you like to read?";
}


// start of program
document.getElementById("introHeading").innerText = "Welcome to the reading app!";
document.getElementById("introHeading2").innerText = "What book would you like to read today?";


