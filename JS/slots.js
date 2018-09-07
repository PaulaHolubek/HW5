//Code will run when document is ready and spin button has been clicked
$(document).ready(function () {
    $("#spin").click(function () {
        spin("tb1");
        spin("tb2");
        spin("tb3");
        checkMatchingBoxes();
    })

    function spin(tbId) {
        var counter;

        //determines random number for the tb1 box and adds the corresponding value to the class
        for (counter = 0; counter < 10; counter++) {
            var rndNum = Math.floor(Math.random() * 10);

            if (rndNum == 0 || rndNum > 3)
                continue;

            var el = document.getElementById(tbId);

            if (rndNum == 1) {
                el.className = "one";
            }

            if (rndNum == 2) {
                el.className = "two";
            }

            if (rndNum == 3) {
                el.className = "three";
            }

        }
    }

    function checkMatchingBoxes() {
        var msgWin = "Congratulations, you won!";
        var msgLost = "Sorry, try again";

        //gets the class name for the tb1, second and third boxes and stores the values in separate variables
        var firstbx = document.getElementById("tb1").getAttribute("class");
        var secondbx = document.getElementById("tb2").getAttribute("class");
        var thirdbx = document.getElementById("tb3").getAttribute("class");

        //variables are checked to see if all 3 are the same. 
        //If so, a congrats message appears on the screen
        //If not, a try again message appears on the screen
        if (firstbx == secondbx && firstbx == thirdbx) {
            document.getElementById('msg').innerHTML = msgWin;
        }
        else {
            document.getElementById('msg').innerHTML = msgLost;
        }
    }

    //When the quit button is clicked, the screen fades away
    //and Goodbye fades in on the screen
    $("#quit").click(function () {
        $("div").fadeOut(3000);
        $("#sayGoodBye").fadeIn(2000);
    });

    //Button text changes when mouse is on top of it
    $("#spin").mouseover(function () {
        $("#spin").text("SPIN NOW")
    });
    //Button text changes when mouse is not on top of it
    $("#spin").mouseout(function () {
        $("#spin").text("Spin Again")
    });
})