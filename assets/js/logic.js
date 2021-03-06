//grab html elements
var startPage = document.querySelector("#start-page");//grab start page div
var startBtn = document.querySelector("#start-btn"); //grab start button
var timerDisplay = document.querySelector("#timer-display"); //grab timer display
var quizContent = document.querySelector("#quiz-content"); //grab quiz content div
var highScoresContent = document.querySelector("#high-scores");
var participantInput = document.querySelector("#participant"); //grab participant input
//grab quiz elements
var questionContent = document.querySelector("#question-content")
var radioOption1 = document.querySelector("#option1");
var radioOption2 = document.querySelector("#option2");
var radioOption3 = document.querySelector("#option3");
var radioOption4 = document.querySelector("#option4")
var labelOption1 = document.querySelector("label[for='option1']");
var labelOption2 = document.querySelector("label[for='option2']");
var labelOption3 = document.querySelector("label[for='option3']");
var labelOption4 = document.querySelector("label[for='option4']");
//declare variables
var score = 0;
var quizNum = 1;

// define object classes
class query {
    constructor(tQuestion, tOptions){
    this.question = tQuestion;
        this.options = tOptions;
    }
}

class option {
    constructor(tAnswer, tIsCorrect){
        this.answer = tAnswer;
        this.isCorrect = tIsCorrect;
    }
}

class quiz {
    constructor(tQueries, tParticipant, tScore){
        this.queries = tQueries;
        this.participant = tParticipant;
        this.score = tScore;
    };
};

class scoring {
    constructor(tNumCorrect, tTimeLeft, tScoreValue) {
        this.numCorrect = tNumCorrect;
        this.timeLeft = tTimeLeft;
        this.scoreValue = tScoreValue
    }
}


//TODO: build a function to occur onClick of startBtn
startBtn.addEventListener("click", function(){
    //generate quiz
        //generate queries
        //generate options
    //TODO: populate quiz
    //hide start-page
    //start timer
})
//build queries and options

//build options, query 1
var query1Opt1 = new option("test answer", true);
var query1Opt2 = new option("test answer 2", false);
var query1Opt3 = new option("test answer 3", false);
var query1Opt4 = new option("test answer 4", false);

//build query 1 options array
q1Options = [query1Opt1, query1Opt2, query1Opt3, query1Opt4];

var query1 = new query("test question 1", q1Options);

//build options, query 2
var query2Opt1 = new option("test answer 5", true);
var query2Opt2 = new option("test answer 6", false);
var query2Opt3 = new option("test answer 7", false);
var query2Opt4 = new option("test answer 8", false);

//build query 2 oueryptions array
var query2Options = [query2Opt1, query2Opt2, query2Opt3, query2Opt4];

var query2 = new query("test question 2", query2Options);

//build query 3
// query3 options
var query3Opt1 = new option("test answer 9", true);
var query3Opt2 = new option("test answer 10", false);
var query3Opt3 = new option("test answer 11", false);
var query3Opt4 = new option("test answer 12", false);

//query3 options array
var query3Options = [query3Opt1, query3Opt2, query3Opt3, query3Opt4]

//build query 3
var query3 = new query("test question 3", query3Options);

//build query 4
// query4 options
var query4Opt1 = new option("test answer 13", true);
var query4Opt2 = new option("test answer 14", false);
var query4Opt3 = new option("test answer 15", false);
var query4Opt4 = new option("test answer 16", false);

//query4 options array
var query4Options = [query4Opt1, query4Opt2, query4Opt3, query4Opt4]

//build query 4
var query4 = new query("test question 4", query4Options);

//build query 5
// query5 options
var query5Opt1 = new option("test answer 17", true);
var query5Opt2 = new option("test answer 18", false);
var query5Opt3 = new option("test answer 19", false);
var query5Opt4 = new option("test answer 20", false);

//query5 options array
var query5Options = [query5Opt1, query5Opt2, query5Opt3, query5Opt4]

//build query 3
var query5 = new query("test question 5", query5Options);
//function to generate random question
let queryArray = [query1, query2, query3, query4, query5]//define query Array

//function to generate a random query & remove it from the array
function generateQuery(){
    let randomNum = Math.floor(Math.random()*queryArray.length)
    var randomQuery = queryArray[randomNum];
    queryArray.splice(randomNum, 1)[0];
    return randomQuery;
    
};

//function to build quiz


function constructQuiz(){
    var tParticipant = participantInput.value;
    var tQueries = []; //declare tQueries as an empy array
    for(var i = queryArray.length; i > 0; i--){
        var randomQuery = generateQuery();
        tQueries.push(randomQuery);
        console.log(tQueries);
    }
    window[`quiz${quizNum}`]= new quiz(tQueries,tParticipant);

}


//function to randomly populate content
//TODO: Simplify Populate Quiz Area
//TODO: Randomize Options




var queryNum = 0
// Function to populate quiz
function populateQuiz() {
   questionContent.textContent = window[`quiz${quizNum}`].queries[queryNum].question
   for(var i = 0; i < window[`quiz${quizNum}`].queries[queryNum].options.length; i++) {
        eval(`labelOption${i+1}`).textContent = window[`quiz${quizNum}`].queries[queryNum].options[i].answer;
        if(window[`quiz${quizNum}`].queries[queryNum].options[i].isCorrect === true){
            eval(`radioOption${i+1}`).value = "correct";
        } else {
            eval(`radioOption${i+1}`).value = "incorrect";
        };
   }
   queryNum++
};


//function to decide what happens when submit is clicked
// quizContent.addEventListener("click", function(event){
//     var element = event.target
//     if(element.matches("button")){
//         console.log("Button Pressed!");
//         var radioBtns = document.querySelectorAll("input[type=radio]");
//         for(var i = 0; i < radioBtns.length; i++) {
//             if(radioBtns[i].checked && radioBtns[i].value === "correct"){
//                 if(window[`quiz${quizNum}`].queries[queryNum].options.length !== 0){
//                     populateQuiz()
//                 } else {
//                     break
//                 }//write else statement
//             }
            
//             if(radioBtns[i].checked && radioBtns[i].value === "incorrect"){
//                 timerValue = timerValue-10;
//                 timer.textContent = timerValue;
//                 if (window[`quiz${quizNum}`].queries[queryNum].options.length !== 0) {
//                     populateQuiz()
//                 } else {
//                     break
//                 } //write else statement

//             };
//         }
//     }
// })


//timer functions
var countDownInterval
function timer(){
    countDownInterval = setInterval(countDown, 1000)
}
function countDown() {
    if (timerValue > 0) {
        timerValue--
        timer.textContent = timerValue;
    } else {
        clearInterval(countDownInterval); //clears the interval and stops the timer
        alert("Game Over");

    }
};

//TODO: Add start button functionality
//TODO: Add High Score FunctionAlity
