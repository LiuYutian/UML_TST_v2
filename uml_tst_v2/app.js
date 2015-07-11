var express = require('express');
var ejs = require("ejs");
var app = express();
var bodyParser = require("body-parser");
var QuestionsBank = require("./questionsBank.js");
var initQuestionsBank = require("./initQuestionsBank.js");

app.engine(".html", ejs.__express);
app.set("view engine", "html");

app.use(bodyParser.urlencoded(
    {extended : true}
));

app.use(express.static("public"));
app.use("/static", express.static("public"));

app.get("/", function(req, res) {
    res.render("index", {});
});

app.post("/result", function(req, res) {
    var questionsBank = new QuestionsBank(req.body);
    initQuestionsBank(questionsBank);
    var resultScore = questionsBank.getSumScore(req.body);

    res.send(
        {
            status : 1,
            data : {
                score : resultScore
            },
            message : ""
        }
    );
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
