// lists of questions
let iSurvivedQuestionsParagraph1 = ["question 1", "question 2", "question 3", "question 4"];
let iSurvivedQuestionsParagraph2 = ["question 1", "question 2", "question 3", "question 4"];
let iSurvivedQuestionsParagraph3 = ["question 1", "question 2", "question 3", "question 4"];
// let iSurvivedQuestionsParagraph4 = ["question 1", "question 2", "question 3", "question 4"];
// let iSurvivedQuestionsParagraph5 = ["question 1", "question 2", "question 3", "question 4"];
let allISurvivedQuestions = [...iSurvivedQuestionsParagraph1,...iSurvivedQuestionsParagraph2,...iSurvivedQuestionsParagraph3]

// lists of answers
let iSurvivedAnswersParagraph1 = ["answer 1", "answer 2", "answer 3", "answer 4"];
let iSurvivedAnswersParagraph2 = ["answer 1", "answer 2", "answer 3", "answer 4"];
let iSurvivedAnswersParagraph3 = ["answer 1", "answer 2", "answer 3", "answer 4"];
// let iSurvivedAnswersParagraph4 = ["answer 1", "answer 2", "answer 3", "answer 4"];
// let iSurvivedAnswersParagraph5 = ["answer 1", "answer 2", "answer 3", "answer 4"];
let allISurvivedAnswers = [...iSurvivedAnswersParagraph1,...iSurvivedAnswersParagraph2,...iSurvivedAnswersParagraph3];


// lists of paragraphs
const iSurvivedParagraph1 = "Josh stared in horror at the blood-red glow rising up behind him. A massive wildfire was raging through the forest, a wall of flames devouring everything in its path. Josh and his cousin Holly were in a race for their lives.\n\t'Josh!' Holly shouted, grabbing his hand.\n'This way!`\n\tAs they took off along the forest path, the hot wind gusted hard. Suddenly,the air was filled with sparks and glowing embers and chunks of flaming wood. Josh felt them landing on his bare arms and legs, sizzling against his skin like the white-hot teeth of a flesh-eating monster.\n\tHe and Holly ran faster, but the wall of flames was closing in from behind. And all around them, the burning embers were setting fires wherever they landed.";
const iSurvivedParagraph2 = "On treetops. \nWHOOSH! \nOn branches. \nWHOOSH!\nOn the forest floor.\nWHOOSH! WHOOSH! WHOOSH! \nWith every gust of wind, more embers swirled. Flames shot higher and higher into the sky. A nightmare of sounds against Josh`s ears. The fire`s roar, the moaning wind, the cracking and snapping of the trees. It was as though air itself was shrieking in agony. \nJosh glanced around, struggling to breathe in the thickening smoke. Just minutes before, the forest had been peaceful and green. Now it was a terrifying maze of fire. \nHow could everything change so fast? \nAnd then: \nBoom! \nA burning pine tree in front of them exploded. Shards of splintered wood sprayed out. Holly tried to pull Josh sideways, but Josh stumbled. When he looked up, there was a flaming branch speeding through the air. \nIt was headed straight for his skull." ;
const iSurvivedParagraph3 = "Josh snatched the basketball from the air and sprinted down the court. They were down by two points, just seconds left in the game. A monster of a kid was all over Josh, trying to steal the ball. But Josh spun around and took the shot just as the buzzer blared.\nSwish! \nThree points! They`d won! \nJosh dropped to his knees in happy shock. \nHis team swarmed around him, smothering him in sweaty hugs.\n``You were unstoppable!`` said Josh`s best friend, Greg, as they trotted off the court. ``That shot was sick!``\n``You played great, too,`` Josh said, putting an arm around Greg`s skinny shoulders.\nJosh glanced up into the stands, wishing his father had been there to see his buzzer-beater. Dad was going to freak when he found out that Josh made a three-pointer!\nJosh had been practicing in the driveway for months,shooting and missing, shooting and missing, with Dad always cheering him on.\n``Don`t give up!`` he`d shout. Dad always told Josh he could do anything he set his mind to.\n``Just look at me,`` he`d say.\nDad had grown up with practically nothing. He`d worked his butt off. Now he was one of the top guys at the big New York City bank where he worked. Everyone loved Tim Wallace. And Josh admired his father more than anyone in the world.\nJosh packed up his stuff and said goodbye to his coach.\n``Need a ride?`` Greg asked as they headed out into the parking lot.\n``I`m good,`` Josh said, high-fiving Greg. ``I`m sure my mom is on her way.``\nBut five minutes passed, then ten. All Josh`s friends had left, and Mom still wasn`t there. She hadn`t been feeling great today; that`s why she`d skipped the game. But Josh could swear she`d said she`d be here to pick him up.";
// const iSurvivedParagraph4 = "This is the fourth paragraph of the book.";
// const iSurvivedParagraph5 = "This is the fifth paragraph of the book.";
const allISurvivedParagraphs = [iSurvivedParagraph1,iSurvivedParagraph2,iSurvivedParagraph3];

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

// function to read the number of paragraphs the user wants to read
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

// function to set up the screen to show each paragraph
function setupToShowParagraphs(){
    document.getElementById("numParagraphsHeading2").classList.add("hidden");
    document.getElementById("numParagraphsButton").classList.add("hidden");
    document.getElementById("numParagraphsText").classList.add("hidden");
    document.getElementById("mainParagraph").classList.remove("hidden");
    document.getElementById("nextButton").classList.remove("hidden");
    increment();
}

// function to show each paragraph
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

// function to increment the current paragraph
function increment(){
    finishedParagraphs+=1;
    showParagraphs(finishedParagraphs);
}

// function to begin quiz
function startQuiz(){

}

// start of program
document.getElementById("introHeading").innerText = "Welcome to the reading app!";
document.getElementById("introHeading2").innerText = "What book would you like to read today?";
