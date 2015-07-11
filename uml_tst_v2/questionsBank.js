var Question = require("./question");

function QuestionsBank() {
    this.questionsBank = [];
}

QuestionsBank.prototype.addQuestion = function(question) {
    this.questionsBank.push(question);
}

QuestionsBank.prototype.getSumScore = function(values) {
    var sumScore = 0;

    this.questionsBank.forEach(function(question) {
        for(var key in values) {
            if(question.name === key) {
                sumScore += question.getScore(values[key]);
            }
        }
    });

    return sumScore;
}
module.exports = QuestionsBank;
