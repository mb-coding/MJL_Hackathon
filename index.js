// lists of questions
let iSurvivedQuestionsParagraph1 = ["question 1", "question 2", "question 3", "question 4"];
let iSurvivedQuestionsParagraph2 = ["question 1", "question 2", "question 3", "question 4"];
let iSurvivedQuestionsParagraph3 = ["question 1", "question 2", "question 3", "question 4"];
let iSurvivedQuestionsParagraph4 = ["question 1", "question 2", "question 3", "question 4"];
let iSurvivedQuestionsParagraph5 = ["question 1", "question 2", "question 3", "question 4"];
let allISurvivedQuestions = [...iSurvivedQuestionsParagraph1,...iSurvivedQuestionsParagraph2,...iSurvivedQuestionsParagraph3,...iSurvivedQuestionsParagraph4,...iSurvivedQuestionsParagraph5];
// lists of answers
let iSurvivedAnswersParagraph1 = ["answer 1", "answer 2", "answer 3", "answer 4"];
let iSurvivedAnswersParagraph2 = ["answer 1", "answer 2", "answer 3", "answer 4"];
let iSurvivedAnswersParagraph3 = ["answer 1", "answer 2", "answer 3", "answer 4"];
let iSurvivedAnswersParagraph4 = ["answer 1", "answer 2", "answer 3", "answer 4"];
let iSurvivedAnswersParagraph5 = ["answer 1", "answer 2", "answer 3", "answer 4"];
let allISurvivedAnswers = [...iSurvivedAnswersParagraph1,...iSurvivedAnswersParagraph2,...iSurvivedAnswersParagraph3,...iSurvivedAnswersParagraph4,...iSurvivedAnswersParagraph5];


// lists of paragraphs
const iSurvivedParagraph1 = "This is the first paragraph of the book.";
const iSurvivedParagraph2 = "This is the second paragraph of the book.";
const iSurvivedParagraph3 = "This is the third paragraph of the book.";
const iSurvivedParagraph4 = "This is the fourth paragraph of the book.";
const iSurvivedParagraph5 = "This is the fifth paragraph of the book.";
const allISurvivedParagraphs = [iSurvivedParagraph1,iSurvivedParagraph2,iSurvivedParagraph3,iSurvivedParagraph4,iSurvivedParagraph5];

let numOfParagraphs = 5;

let selectedNumOfParagraphs = 0;

let finishedParagraphs = -1;

// function to clear the screen of all html elements
function clearIntroScreen(){
    document.getElementById("introHeading").classList.add("hidden");
    document.getElementById("introHeading2").classList.add("hidden");
    document.getElementById("introButton").classList.add("hidden");
}

// function to show text after book is selected
function promptParagraphNum(){
    clearIntroScreen();
    document.getElementById("numParagraphsHeading2").classList.remove("hidden");
    document.getElementById("numParagraphsButton").classList.remove("hidden");
    document.getElementById("numParagraphsText").classList.remove("hidden");
    document.getElementById("numParagraphsHeading2").innerText = "How many paragraphs would you like to read?";
}

function readInput(){
    // console.log(document.getElementById("numParagraphsText").value);
    let text = document.getElementById("numParagraphsText").value
    // change these values if the number of paragraphs change
    if (text=="2" || text == "3" || text == "4" || text == "5") {
        if (text=="2"){
            selectedNumOfParagraphs = 2;
        }
        else if (text == "3"){
            selectedNumOfParagraphs = 3;
        }
        else if (text == "4"){
            selectedNumOfParagraphs = 4;
        }
        else if (text == "5"){
            selectedNumOfParagraphs = 5;
        }
        setupToShowParagraphs();
    }
    else {
        alert("Please enter a valid input between 2 and "+numOfParagraphs+" paragraphs!");
    }
}

function setupToShowParagraphs(){
    document.getElementById("numParagraphsHeading2").classList.add("hidden");
    document.getElementById("numParagraphsButton").classList.add("hidden");
    document.getElementById("numParagraphsText").classList.add("hidden");
    document.getElementById("mainParagraph").classList.remove("hidden");
    document.getElementById("nextButton").classList.remove("hidden");
    increment();
}

function showParagraphs(updatedFinishedParagraphs){
    // console.log(selectedNumOfParagraphs);
    if(updatedFinishedParagraphs < selectedNumOfParagraphs){
        document.getElementById("mainParagraph").innerText = allISurvivedParagraphs[updatedFinishedParagraphs];
    }
    if(updatedFinishedParagraphs == selectedNumOfParagraphs-1){
        document.getElementById("nextButton").classList.add("hidden");
        document.getElementById("finishButton").classList.remove("hidden");
    }
}

function increment(){
    finishedParagraphs+=1;
    showParagraphs(finishedParagraphs);
}

function startQuiz(){
    
}

// start of program
document.getElementById("introHeading").innerText = "Welcome to the reading app!";
document.getElementById("introHeading2").innerText = "What book would you like to read today?";


