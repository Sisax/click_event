$("#event1").click(() => {
    console.log("Yeah, you clicked me!");
});

$("#event2").click(() => {
    $("#event1").text("This!")
});

$("#event3").click (() => {
    $("button").css({backgroundColor: "black"});
    $("#event3").text("You touched, didnt you?");
    $("#event3").css({color: "white"});
});