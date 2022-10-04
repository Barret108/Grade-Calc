// JavaScript Code

function myScore() {
    var g1 = document.getElementById("dg1").value;
    var g2 = document.getElementById("dg2").value;
    var g3 = document.getElementById("dg3").value;
    var g4 = document.getElementById("dg4").value;
    var g5 = document.getElementById("dg5").value;
    var score = 0;
    var score = +g1 + +g2 + +g3 + +g4 + +g5;
    grade = score / 5
    document.getElementById("scorePercent").innerText = grade
}
