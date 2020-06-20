var username = "";
function askUsername() {
    send_message("Hello, What's Your name?");
}

function send_message(message) {
    var prevMessage = $("#container").html();
    if (prevMessage != 0)
        prevMessage = prevMessage + "<br><br>";

    $("#container").html(prevMessage + " <div class='flex-b'><img src='img/bot.png'>" + message + "</div>");
    $(".current_message").hide();
    $(".current_message").delay(400).fadeIn();
    $(".current_message").removeClass("current_message");

}

function ai(message) {
    if (username.length < 3) {
        username = message;
        send_message("Welcome " + message + ", How are you doing today?");
    }

    else if (message.indexOf("fine") >= 0 || message.indexOf("and you") >= 0) {
        send_message("Okay, I can tell you the time");
        send_message("Send the word");
        send_message("<b>time<b>");
    }

    else if (message.indexOf("time") >= 0 || message.indexOf("can you tell me time") >= 0) {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        send_message("Current Time is :  " + h + ":" + m);
        send_message("Thank you");
    } else {
        send_message("I do not understand this reply");
        send_message("But i can tell you the time");
        send_message("Send the word");
        send_message("<b>time<b>");
    }

}

$(function () {

    askUsername();

    $("#textbox").keypress(function (event) {
        if (event.which == 13) {
            if ($("#enter").prop("checked")) {
                event.preventDefault();
                $("#send").click();
            }
        }
    });

    $("#send").click(function () {
        var username = "You : "
        var message = $("#textbox").val();
        $("#textbox").val("");

        var prevMessage = $("#container").html();

        // console.log(prevMessage.length);
        if (prevMessage.length != 0 || prevMessage != "")
            prevMessage = prevMessage + "<br><br>";

        $("#container").html(prevMessage + username + message);

        $("#container").scrollTop($("#container").prop("scrollHeight"));

        ai(message);

    });


});