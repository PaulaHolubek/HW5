
//Hiding the Goodbye paragraph
    $('#see').hide();

//Code will run when document is ready and spin button has been clicked
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
        
		//determines random number for the first box and adds the corresponding value to the class
        for (i = 1; i <= 10; i++) {
            result = Math.floor(Math.random() * 10);

            if (result == 0 || result > 3) {
                continue;
            }
            else if (result == 1) {
                //document.write('Assign Class a Value of one' + '<br>');
                //$("#first").removeClass("one two three");
                //$("#first").addClass("one");
				$("#first").attr('class', 'one');
                break;
            }

            else if (result == 2) {
                //document.write('Assign Class a Value of two' + '<br>');
                //$("#first").removeClass("one two three");
                //$("#first").addClass("two");
				$("#first").attr('class', 'two');
                break;
            }
            else if (result == 3) {
                //document.write('Assign Class a Value of three' + '<br>');
               // $("#first").removeClass("one two three");
               // $("#first").addClass("three");
				$("#first").attr('class', 'three');
                break;
            }
            else {
                ;
            }

        };

		//determines random number for the second box and adds the corresponding value to the class
        for (i = 1; i <= 10; i++) {
            result1 = Math.floor(Math.random() * 10);

            if (result1 == 0 || result1 > 3) {
                continue;
            }
            else if (result1 == 1) {
                //document.write('Assign Class a Value of one' + '<br>');
                //$("#second").removeClass("one two three");
                //$("#second").addClass("one");
				$("#second").attr('class', 'one');
                break;
            }
            else if (result1 == 2) {
                //document.write('Assign Class a Value of two' + '<br>');
                //$("#second").removeClass("one two three");
               // $("#second").addClass("two");
				$("#second").attr('class', 'two');
                break;
            }
            else if (result1 == 3) {
                //document.write('Assign Class a Value of three' + '<br>');
                //$("#second").removeClass("one two three");
                //$("#second").addClass("three");
				$("#second").attr('class', 'three');
                break;
            }
            else {
                ;
            }
        };

		//determines random number for the third box and adds the corresponding value to the class
        for (i = 1; i <= 10; i++) {
            result2 = Math.floor(Math.random() * 10);

            if (result2 == 0 || result2 > 3) {
                continue;
            }
            else if (result2 == 1) {
                //document.write('Assign Class a Value of one' + '<br>');
                //$("#third").removeClass("one two three");
                //$("#third").addClass("one");
				$("#third").attr('class', 'one');
                break;
            }
            else if (result2 == 2) {
                //document.write('Assign Class a Value of two' + '<br>');
                //$("#third").removeClass("one two three");
                //$("#third").addClass("two");
				$("#third").attr('class', 'two');
                break;
            }
            else if (result2 == 3) {
                //document.write('Assign Class a Value of three' + '<br>');
                //$("#third").removeClass("one two three");
                //$("#third").addClass("three");
				$("#third").attr('class', 'three');
                break;
            }
            else {
                ;
            }
        };
		
		//gets the class name for the first, second and third boxes and stores the values in separate variables
        var box1 = document.getElementById("first").getAttribute("class");
        var box2 = document.getElementById("second").getAttribute("class");
        var box3 = document.getElementById("third").getAttribute("class");
		
		//variables are checked to see if all 3 are the same. 
		//If so, a congrats message appears on the screen
		//If not, a try again message appears on the screen
        if (box1 == box2 && box1 == box3) {
            document.getElementById('msg').innerHTML = msgwin;
        }
        else {
            document.getElementById('msg').innerHTML = msgnowin;
        }
    });

});
		//When the quit button is clicked, the screen fades away
		//and Goodbye fades in on the screen
        $("#quit").click(function () {
            $("div").fadeOut(3000);
        $("p#see").fadeIn(2000);
    });
	
		//Button text changes when mouse is on top of it
        $("#spin").mouseover(function () {
            $("#spin").text("SPIN NOW")
            });
		//Button text changes when mouse is not on top of it
        $("#spin").mouseout(function () {
            $("#spin").text("Spin Again")
        });



