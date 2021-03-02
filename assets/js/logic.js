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

