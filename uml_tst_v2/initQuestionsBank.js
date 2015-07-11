var Question = require("./question.js")

function initQuestionsBank(questionsBank) {
    questionsBank.addQuestion(new Question("gapfill-no1", ["统一建模语言"], 1, "text"));
    questionsBank.addQuestion(new Question("gapfill-no2", ["封装性", "继承性", "多态性"], 3, "text"));
    questionsBank.addQuestion(new Question("single-no1", ["B"], 1, "select"));
    questionsBank.addQuestion(new Question("single-no2", ["A"], 1, "select"));
    questionsBank.addQuestion(new Question("multiple-no1", ["A", "B", "D"], 1, "select"));
    questionsBank.addQuestion(new Question("multiple-no2", ["A", "B", "C"], 1, "select"));
    questionsBank.addQuestion(new Question("judge-no1", ["×"], 1, "select"));
    questionsBank.addQuestion(new Question("judge-no2", ["√"], 1, "select"));
    questionsBank.addQuestion(new Question("shortAanswer", ["模型"], 1, "text"));
    // "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达形式。"
}

module.exports = initQuestionsBank;
