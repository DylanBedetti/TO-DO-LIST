$(document).ready(function() {
    console.log("ready");
    var d = new Date()
    $("#date")[0].innerText = d.toString().slice(0,10).replace("0", "")

    $("#app").fadeIn(500);





});