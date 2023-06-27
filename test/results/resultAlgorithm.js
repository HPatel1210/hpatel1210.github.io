var q1 = localStorage.getItem("q1");
var q2 = localStorage.getItem("q2");
var q3 = localStorage.getItem("q3");
var q4 = localStorage.getItem("q4");
var q5 = localStorage.getItem("q5");
var q6 = localStorage.getItem("q6");
var q7 = localStorage.getItem("q7");
var q8 = localStorage.getItem("q8");
var q9 = localStorage.getItem("q9");
var q10 = localStorage.getItem("q10");
var q11 = localStorage.getItem("q11");
var q12 = localStorage.getItem("q12");
var q13 = localStorage.getItem("q13");
var q14 = localStorage.getItem("q14");
var q15 = localStorage.getItem("q15");
var q16 = localStorage.getItem("q16");
var q17 = localStorage.getItem("q17");

function resultAlgorithm() {
    q1 = parseInt(localStorage.getItem("q1"));
    q2 = parseInt(localStorage.getItem("q2"));
    q3 = parseInt(localStorage.getItem("q3"));
    q4 = parseInt(localStorage.getItem("q4"));
    q5 = parseInt(localStorage.getItem("q5"));
    q6 = parseInt(localStorage.getItem("q6"));
    q7 = parseInt(localStorage.getItem("q7"));
    q8 = parseInt(localStorage.getItem("q8"));
    q9 = parseInt(localStorage.getItem("q9"));
    q10 = parseInt(localStorage.getItem("q10"));
    q11 = parseInt(localStorage.getItem("q11"));
    q12 = parseInt(localStorage.getItem("q12"));
    q13 = parseInt(localStorage.getItem("q13"));
    q14 = parseInt(localStorage.getItem("q14"));
    q15 = parseInt(localStorage.getItem("q15"));
    q16 = parseInt(localStorage.getItem("q16"));
    q17 = parseInt(localStorage.getItem("q17"));

    var obtainedMarks = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 + q10 + q11 + q12 + q13 + q14 + q15 + q16 + q17;
    var maxMarks = 85;
    var percentage = obtainedMarks / maxMarks * 100;
    percentage = Math.round(percentage);
    document.getElementById("resultDisplayPercentage").innerHTML = percentage;
    document.getElementById("resultDisplayMarks").innerHTML = obtainedMarks;
    localStorage.setItem("attemptTime", Date());
}

