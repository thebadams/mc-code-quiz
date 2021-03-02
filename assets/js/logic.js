// define object classes
class query {
    constructor(tQuestion, tOptions){
        this.question = tQuestion;
        this.options = tOptions;
    }
}

class option {
    constructor(tAnswer, tIsCorrect, tIsSelected){
        this.answer = tAnswer;
        this.isCorrect = tIsCorrect;
        this.isSelected = tIsSelected
    }
}

//build queries and options

//build options, query 1
var q1Opt1 = new option("test answer", true, false);
var q1Opt2 = new option("test answer 2", false, false);
var q1Opt3 = new option("test answer 3", false, false);
var q1Opt4 = new option("test answer 4", false, false);

//build query 1 options array
q1Options = [q1Opt1, q1Opt2, q1Opt3, q1Opt4];

var q1 = new query("test question 1", q1Options);

//build options, query 1
var q2Opt1 = new option("test answer 5", true, false);
var q2Opt2 = new option("test answer 6", false, false);
var q2Opt3 = new option("test answer 7", false, false);
var q2Opt4 = new option("test answer 8", false, false);

//build query 1 options array
q2Options = [q2Opt1, q2Opt2, q2Opt3, q2Opt4];

var q2 = new query("test question 2", q2Options);

//function to generate random question
function generateQuery(){
    let queryArray = [q1, q2];
    let randomNum = Math.floor(Math.random()*queryArray.length)
    var randomQuery = queryArray[randomNum];
    return randomQuery;
    
};
let questionContent = document.querySelector("h2");
// questionContent.textContent = q1.question
// let optionContent1 = document.querySelector("label[for=option1]");
// let optionContent2 = document.querySelector("label[for=option2]");
// let optionContent3 = document.querySelector("label[for=option3]");
// let optionContent4 = document.querySelector("label[for=option4]");

// optionContent1.textContent = q1Opt1.answer;
// optionContent2.textContent = q1Opt2.answer;
// optionContent3.textContent = q1Opt3.answer;
// optionContent4.textContent = q1Opt4.answer;

//function to randomly populate content
function populateContent(){
    randomQuery = generateQuery();
    questionContent.textContent = randomQuery.question
    for(var i = 0; i < randomQuery.options.length; i++){
        window[`optionContent${(i+1)}`] = document.querySelector(`label[for=option${i+1}`);
        window[`optionContent${(i+1)}`].textContent = randomQuery.options[i].answer;
    };
};