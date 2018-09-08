$(document).ready(function () {
    var correct = Math.floor(Math.random() * 150 * 50);
    $("#correctNumber").text(correct);
    console.log(correct);

    var Crystal1 = Math.floor(Math.random() * 10 * 1)
    var Crystal2 = Math.floor(Math.random() * 10 * 1)
    var Crystal3 = Math.floor(Math.random() * 10 * 1)

    function reset() {
        correct = Math.floor(Math.random() * 150 * 50);
        $("#correctNumber").text(correct);
        console.log(correct);
        var Crystal1 = Math.floor(Math.random() * 10 * 1)
        var Crystal2 = Math.floor(Math.random() * 10 * 1)
        var Crystal3 = Math.floor(Math.random() * 10 * 1)
    }
    var guess=0;
    var wins=0;
    var losses=0;

    $("numberWins").text(wins);
    $("numberLosses").text(losses);

    $("#cryst1").on(click,function(){
        guess= guess + Crystal1;

    });
    


});