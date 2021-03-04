//grab html elements
var startPage = document.querySelector("#start-page");//grab start page div
var startBtn = document.querySelector("#start-btn"); //grab start button
var timerDisplay = document.querySelector("#timer-display"); //grab timer display
var quizContent = document.querySelector("#quiz-content"); //grab quiz content div
var highScoresContent = document.querySelector("#high-scores");


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

//build queries and options

//build options, query 1
var q1Opt1 = new option("test answer", true);
var q1Opt2 = new option("test answer 2", false);
var q1Opt3 = new option("test answer 3", false);
var q1Opt4 = new option("test answer 4", false);

//build query 1 options array
q1Options = [q1Opt1, q1Opt2, q1Opt3, q1Opt4];

var q1 = new query("test question 1", q1Options);

//build options, query 1
var q2Opt1 = new option("test answer 5", true, false);
var q2Opt2 = new option("test answer 6", false, false);
var q2Opt3 = new option("test answer 7", false, false);
var q2Opt4 = new option("test answer 8", false, false);

//build query 2 options array
q2Options = [q2Opt1, q2Opt2, q2Opt3, q2Opt4];

var q2 = new query("test question 2", q2Options);

//function to generate random question
let queryArray = [q1, q2]//define query Array
function generateQuery(){
    let randomNum = Math.floor(Math.random()*queryArray.length)
    var randomQuery = queryArray[randomNum];
    queryArray.splice(randomNum);
    return randomQuery;
    
};
let questionContent = document.querySelector("h2");


//function to randomly populate content
//TODO: Randomize Options
function populateContent(){
    randomQuery = generateQuery();
    questionContent.textContent = randomQuery.question // assigns question of RandomQuery to questionContent.textContent
    for(var i = 0; i < randomQuery.options.length; i++){ //for each option in the chosen Query
        window[`optionContent${(i+1)}`] = document.querySelector(`label[for=option${i+1}`); //generate a variable "optionContent#" and set it to be the label
        window[`optionContent${(i+1)}`].textContent = randomQuery.options[i].answer; //set the label content to be the necessary option
        window[`optionRadio${(i+1)}`] = document.querySelector(`#option${(i+1)}`); //generate a variable "optionRadio#" and set to to be the radio button itself
        if(randomQuery.options[i].isCorrect){ //test the value of randomQuery.options[i].isCorrect
            window[`optionRadio${(i + 1)}`].setAttribute("value", "correct")
        } else {
            window[`optionRadio${(i+1)}`].setAttribute("value", "incorrect");
        };
};
};

//function to decide what happens when submit is clicked
submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    var radioBtns = document.querySelectorAll("input[type=radio]");
    for(var i = 0; i < radioBtns.length; i++) {
        if(radioBtns[i].checked && radioBtns[i].value === "correct"){
            populateContent()
        }; 
        
        if(radioBtns[i].checked && radioBtns[i].value === "incorrect"){
            timerValue = timerValue-10;
            timer.textContent = timerValue;
            populateContent();
        };
    }
})


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
