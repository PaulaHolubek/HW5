

    $('#see').hide();

$(document).ready(function () {
    $("#spin").click(function () {
        var result;
        var result1;
        var result2;
        var box1;
        var box2;
        var box3;
        var msgwin = "Congratulations, you won!";
        var msgnowin = "Sorry, try again";
        var i;
        

        for (i = 1; i <= 10; i++) {
            result = Math.floor(Math.random() * 10);

            if (result == 0 || result > 3) {
                continue;
            }
            else if (result == 1) {
                //document.write('Assign Class a Value of one' + '<br>');
                $("#first").removeClass("one two three");
                $("#first").addClass("one");
                break;
            }

            else if (result == 2) {
                //document.write('Assign Class a Value of two' + '<br>');
                $("#first").removeClass("one two three");
                $("#first").addClass("two");
                break;
            }
            else if (result == 3) {
                //document.write('Assign Class a Value of three' + '<br>');
                $("#first").removeClass("one two three");
                $("#first").addClass("three");
                break;
            }
            else {
                ;
            }

        };

        for (i = 1; i <= 10; i++) {
            result1 = Math.floor(Math.random() * 10);

            if (result1 == 0 || result1 > 3) {
                continue;
            }
            else if (result1 == 1) {
                //document.write('Assign Class a Value of one' + '<br>');
                $("#second").removeClass("one two three");
                $("#second").addClass("one");
                break;
            }
            else if (result1 == 2) {
                //document.write('Assign Class a Value of two' + '<br>');
                $("#second").removeClass("one two three");
                $("#second").addClass("two");
                break;
            }
            else if (result1 == 3) {
                //document.write('Assign Class a Value of three' + '<br>');
                $("#second").removeClass("one two three");
                $("#second").addClass("three");
                break;
            }
            else {
                ;
            }
        };

        for (i = 1; i <= 10; i++) {
            result2 = Math.floor(Math.random() * 10);

            if (result2 == 0 || result2 > 3) {
                continue;
            }
            else if (result2 == 1) {
                //document.write('Assign Class a Value of one' + '<br>');
                $("#third").removeClass("one two three");
                $("#third").addClass("one");
                break;
            }
            else if (result2 == 2) {
                //document.write('Assign Class a Value of two' + '<br>');
                $("#third").removeClass("one two three");
                $("#third").addClass("two");
                break;
            }
            else if (result2 == 3) {
                //document.write('Assign Class a Value of three' + '<br>');
                $("#third").removeClass("one two three");
                $("#third").addClass("three");
                break;
            }
            else {
                ;
            }
        };
        var box1 = document.getElementById("first").getAttribute("class");
        var box2 = document.getElementById("second").getAttribute("class");
        var box3 = document.getElementById("third").getAttribute("class");
        if (box1 == box2 && box1 == box3) {
            document.getElementById('msg').innerHTML = msgwin;
        }
        else {
            document.getElementById('msg').innerHTML = msgnowin;
        }
    });

});

        $("#quit").click(function () {
            $("div").fadeOut(3000);
        $("p#see").fadeIn(2000);
    });
        $(document).ready(function () {
            $("#spin").mouseover(function () {
                $("#spin").text("SPIN NOW")
            });
        $("#spin").mouseout(function () {
            $("#spin").text("Spin Again")
        });
    });

