var ASCLL_8 = 8;
var ASCLL_9 = 9;
var ASCLL_37 = 37;
var ASCLL_39 = 39;
var ASCLL_46 = 46;
var ASCLL_48 = 48;
var ASCLL_57 = 57;

$("#commit").on("click", function(evt) {
    window.scroll(0, 0);
    if(checkMunstInfo()) {
        $.post("/result", $("#formData").serialize(), function(result) {
            showScore(result);
        });
    }
});

$("#studnetNumber").on("keydown", function(evt) {
    if(!(evt.keyCode <= ASCLL_57 && evt.keyCode >= ASCLL_48 || evt.keyCode === ASCLL_8 || evt.keyCode === ASCLL_46
        || evt.keyCode === ASCLL_9 || evt.keyCode === ASCLL_37 || evt.keyCode === ASCLL_39)) {
        evt.preventDefault();
    }
});

var addSelectListener = function(name, id) {
    $("[name="+ name +"]").on("click", function() {
        $("#"+id).html("");
        $("[name="+ name +"]").each(function(i, n) {
            if(n.checked === true) {
                $("#"+id).append(n.value);
            }
        });
    });
}

addSelectListener("single-no1", "single-no1");
addSelectListener("single-no2", "single-no2");
addSelectListener("multiple-no1", "multiple-no1");
addSelectListener("multiple-no2", "multiple-no2");

$("#reset").on("click", function(evt) {
    $("#single-no1").html("");
    $("#single-no2").html("");
    $("#multiple-no1").html("");
    $("#multiple-no2").html("");
});

var showScore = function(result) {
    $("#score").prop("value", result.data.score);
}

var checkMunstInfo = function() {
    var exist = true;
    $(".munst").each(function(index, info) {
        if(info.value === "" && exist) {
            exist = false;
            alert(info.placeholder);
        }
    });

    return exist;
}
