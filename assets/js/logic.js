//grab html elements
var startPage = document.querySelector("#start-page");//grab start page div
var startBtn = document.querySelector("#start-btn"); //grab start button
var timerDisplay = document.querySelector("#timer-display"); //grab timer display
var quizContent = document.querySelector("#quiz-content"); //grab quiz content div
var highScoresContent = document.querySelector("#high-scores");
var participantInput = document.querySelector("#participant"); //grab participant input
var timerContent = document.querySelector("#timer");
var highScoreLink = document.querySelector("#high-score-link");
//grab quiz elements
var questionContent = document.querySelector("#question-content");
var radioOption1 = document.querySelector("#option1");
var radioOption2 = document.querySelector("#option2");
var radioOption3 = document.querySelector("#option3");
var radioOption4 = document.querySelector("#option4")
var labelOption1 = document.querySelector("label[for='option1']");
var labelOption2 = document.querySelector("label[for='option2']");
var labelOption3 = document.querySelector("label[for='option3']");
var labelOption4 = document.querySelector("label[for='option4']");
var submitBtn = document.querySelector("#submit");
var highScoreList = document.querySelectorAll("ol li");
var correctDisplay = document.querySelector("#correct-display");
var scoringDisplay =document.querySelector("#scoring-display");
var scoreLogBtn = document.querySelector("#score-log-btn");
var totalScore = document.querySelector("#total-score");
var playAgainBtn = document.querySelector("#play-again");
//declare variables
var correctQuestions = 0;
var quizNum = 0;
var timerValue = 90;
var isGameActive = false
//High Score
var highScores = JSON.parse(localStorage.getItem("highScores")||"[]")

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
    reset();
    isGameActive = true;
    startPage.classList.toggle("hidden");
    timerContent.classList.toggle("hidden");
    quizContent.classList.toggle("hidden");
    constructQuiz();
    populateQuiz();
    timer();
    // generate quiz
    //     generate queries
    //     generate options
    // hide start-page
    // start timer
})
//build queries and options

//build options, query 1
var query1Opt1 = new option("function (){ //code here}", false);
var query1Opt2 = new option("function name(){ //code here}", false);
var query1Opt3 = new option("()=> //code here", false);
var query1Opt4 = new option("func name(){ //code here}", true);

//build query 1 options array
q1Options = [query1Opt1, query1Opt2, query1Opt3, query1Opt4];

var query1 = new query("Which of the following is not a valid way to write a function?", q1Options);

//build options, query 2
var query2Opt1 = new option("Boolean", false);
var query2Opt2 = new option("String", false);
var query2Opt3 = new option("Array", true);
var query2Opt4 = new option("Number", false);

//build query 2 oueryptions array
var query2Options = [query2Opt1, query2Opt2, query2Opt3, query2Opt4];

var query2 = new query("Which of these is not a primitive data type?", query2Options);

//build query 3
// query3 options
var query3Opt1 = new option("Curly Braces", true);
var query3Opt2 = new option("Double Quotes", false);
var query3Opt3 = new option("Square Brackets", false);
var query3Opt4 = new option("Double Quotes", false);

//query3 options array
var query3Options = [query3Opt1, query3Opt2, query3Opt3, query3Opt4]

//build query 3
var query3 = new query("An object is contained in which set of symbols?", query3Options);

//build query 4
// query4 options
var query4Opt1 = new option("var", false);
var query4Opt2 = new option("for", true);
var query4Opt3 = new option("const", false);
var query4Opt4 = new option("let", false);

//query4 options array
var query4Options = [query4Opt1, query4Opt2, query4Opt3, query4Opt4]

//build query 4
var query4 = new query("Which of the following is not a keyword used in delcaring variables?", query4Options);

//build query 5
// query5 options
var query5Opt1 = new option("Period", false);
var query5Opt2 = new option("Hyphen", false);
var query5Opt3 = new option("Semicolon", true);
var query5Opt4 = new option("Comma", false);

//query5 options array
var query5Options = [query5Opt1, query5Opt2, query5Opt3, query5Opt4]

//build query 3
var query5 = new query("A for loop's arguments are separated by what symbol?", query5Options);



//build query 6
var query6Opt1 = new option("array[i]", true);
var query6Opt2 = new option("[i]array", false);
var query6Opt3 = new option("array{i}", false);
var query6Opt4 = new option("array(i)", false);

//query6 options array
var query6Options = [query6Opt1, query6Opt2, query6Opt3, query5Opt4]

//build query 6
var query6 = new query("Which notation is the correct way to get an element at a specific index number from an array?", query6Options);

var query7Opt1 = new option("<js>", false);
var query7Opt2 = new option("<javascript>", false);
var query7Opt3 = new option("<link>", false);
var query7Opt4 = new option("<script>", true);

//query7 options array
var query7Options = [query7Opt1, query7Opt2, query7Opt3, query7Opt4]

//build query 7
var query7 = new query("To include a JavaScript file in an HTML file, you would use which HTML tag?", query7Options);


var query8Opt1 = new option("Sets a variable called 'console.log' to be equal to 'I am the greatest programmer in the world'", false);
var query8Opt2 = new option("Prints the string 'I am the greatest programmer in the world' to the console", true);
var query8Opt3 = new option("Changes the content of the webpage to read 'I am the greatest programmer in the world'", false);
var query8Opt4 = new option("Attaches a string, 'I am the greatest programmer in the world' to the console object.", false);

//query8 options array
var query8Options = [query8Opt1, query8Opt2, query8Opt3, query8Opt4]

//build query 8
var query8 = new query("The Line of code, console.log('I am the greatest programmer in the world') does which of the following?", query8Options);


//build query 9
var query9Opt1 = new option("a calls for the element that you’re adding the event to, b calls for the type of event", false);
var query9Opt2 = new option("a calls for the element that you’re adding the event to, b calls for the function to be run", false);
var query9Opt3 = new option("a calls for the type of event, b calls for the function to be run", true);
var query9Opt4 = new option("a calls for the function to be run, b calls for the type of event", false);

//query9 options array
var query9Options = [query9Opt1, query9Opt2, query9Opt3, query9Opt4]

//build query 9
var query9 = new query("The method, .addEventListener(a, b), calls for what two arguments (a and b); what are they?", query9Options);

//build query 10
var query10Opt1 = new option("1995", true);
var query10Opt2 = new option("2000", false);
var query10Opt3 = new option("2001", false);
var query10Opt4 = new option("1996", false);

//query9 options array
var query10Options = [query10Opt1, query10Opt2, query10Opt3, query10Opt4]

//build query 9
var query10 = new query("What Year was JavaScript Created?", query10Options);


//function to generate random question
let queryArray = [query1, query2, query3, query4, query5, query6, query7, query8, query9, query10]//define query Array

//function to generate a random query & remove it from the array
function generateQuery(){
    let randomNum = Math.floor(Math.random()*queryArray.length)
    var randomQuery = queryArray[randomNum];
    queryArray.splice(randomNum, 1)[0];
    return randomQuery;
    
};

//function to build quiz


function constructQuiz(){
    
    var tQueries = []; //declare tQueries as an empy array
    for(var i = queryArray.length; i > 0; i--){
        var randomQuery = generateQuery();
        tQueries.push(randomQuery);
    }
    window[`quiz${quizNum}`]= new quiz(tQueries);

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

function checkSubmission(){
    var radioBtns = document.querySelectorAll("input[type='radio']");
    for(var i = 0; i < radioBtns.length; i++){
        if(radioBtns[i].checked && (radioBtns[i].value === "correct")){
            correctQuestions++;
            checkGameStatus()
            if(isGameActive) {
                populateQuiz()
            }
        }
        if(radioBtns[i].checked && (radioBtns[i].value === "incorrect")){
            timerValue = timerValue -10;
            timerDisplay.textContent = timerValue;
            checkGameStatus()
            if(isGameActive){
                populateQuiz();
            }
        }
    }
}

function checkGameStatus() {
    if((window[`quiz${quizNum}`].queries[queryNum] === undefined)|| (timerValue === 0)) {
        isGameActive = !isGameActive;
        clearInterval(countDownInterval);
        totalScore.textContent = (timerValue*correctQuestions)
        correctQuestions.textContent = correctQuestions
        quizContent.classList.toggle("hidden");
        scoringDisplay.classList.toggle("hidden")

        
    }
}

scoreLogBtn.addEventListener("click", function(){
    scoreLog()
    timerContent.classList.toggle("hidden");
    highScoresContent.classList.toggle("hidden");
    displayHighScore();
});


//function to decide what happens when submit is clicked
submitBtn.addEventListener("click", checkSubmission);

//function to decide what happens when start is clicked


//timer functions
var countDownInterval
function timer(){
    countDownInterval = setInterval(countDown, 1000)
}
function countDown() {
    if (timerValue > 0) {
        timerValue--
        timerDisplay.textContent = timerValue;
    } else {
        clearInterval(countDownInterval); //clears the interval and stops the timer
        quizContent.classList.toggle("hidden");
        scoringDisplay.classList.toggle("hidden");
        correctDisplay.textContent = correctQuestions;
        totalScore.textContent = (correctQuestions*timerValue);

        

    }
};

//TODO: Add start button functionality
//TODO: Add High Score FunctionAlity
function scoreLog(){
    var tParticipant = participantInput.value;
    var score = new scoring(correctQuestions, timerValue, eval(correctQuestions*timerValue))
    window[`quiz${quizNum}`].score = score;
    window[`quiz${quizNum}`].participant = tParticipant;
    highScores.push(window[`quiz${quizNum}`])
    highScores.sort((a, b) => b.score.scoreValue - a.score.scoreValue);
}

//take current quiz, and add it to high scores list
function displayHighScore() {
   
    if(highScores.length > 10){
        highScores.splice(highScores[10]);
    }
    for(var i = 0; i < highScores.length; i++) {
        highScoreList[i].textContent = `${highScores[i].participant} :: ${highScores[i].score.scoreValue}`
    }
}

function saveHighScore(){
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

highScoreLink.addEventListener("click", function(){
    quizContent.classList.add("hidden");
    startPage.classList.add("hidden");
    clearInterval(countDownInterval);
    displayHighScore();
    highScoresContent.classList.remove("hidden");
})


function reset(){
    quizNum++;
    queryArray = [query1, query2, query3, query4, query5, query6, query7, query8, query9, query10];
    queryNum = 0;
    correctQuestions = 0;
    timerValue = 90;
    highScores = JSON.parse(localStorage.getItem("highScores") || "[]")
}

playAgainBtn.addEventListener("click", function(){
    highScoresContent.classList.add("hidden");
    quizContent.classList.add("hidden");
    timerContent.classList.add("hidden");
    startPage.classList.remove("hidden");
    clearInterval(countDownInterval);
})
    
