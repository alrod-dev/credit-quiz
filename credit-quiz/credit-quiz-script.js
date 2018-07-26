
//Whenever it reloads go back up
$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});

$(document).ready(function () {

    var focusedItem, ficoScore, negativeItems;
    var validity = {one: false, two: false, three: false};

    //Waits for click on Question 1
    document.getElementById("form1").onchange = function () {

        validity.one = false;

        focusedItem = document.querySelector('input[name = "image-pick"]:checked').value;

        $("#form1").addClass("item-hide").css("height", "0");

        $("#form2").css("height", "auto").addClass("item-show");

        validity.one = true;

        creditScore(focusedItem);

        quizFinished();
    };

    //Waits for click on Question 2
    document.getElementById("form2").onchange = function () {

        validity.two = false;

        ficoScore = null;

        ficoScore = document.querySelector('input[name = "fico-score"]:checked').value;

        $("#form2").removeClass("item-show").css("height", "0");

        $("#form3").css("height", "auto").addClass("item-show");

        validity.two = true;


        quizFinished();
    };

    //Waits for click on Question 3
    document.getElementById("form3").onchange = function () {

        validity.three = false;

        negativeItems = document.querySelector('input[name = "negative-items"]:checked').value;

        validity.three = true;

        quizFinished();
    };

    //Validates to check whether the test is done or not!
    function quizFinished() {

        if (validity.one && validity.two && validity.three) {
            quizResult(focusedItem, ficoScore, negativeItems);
        }

    }

    //Quiz Result when quiz is done!
    function quizResult(focusedItem, ficoScore, negativeItems) {

        switch (focusedItem) {
            case "home":

                if (ficoScore === "less-than-549") {
                    $(".main-header").html("40 points could cost you as much as<span><canvas></canvas></span>on your loan");
                    $(".main-subtitle").html("We've helped thousands improve their credit scores. See if we can help you too.");
                    slotMachineEffect("$65,189")
                }

                else if (ficoScore === "550-599") {
                    $(".main-header").html("40 points could cost you as much as<span><canvas></canvas></span>on your loan");
                    $(".main-subtitle").html("We've helped thousands improve their credit scores. See if we can help you too.");
                    slotMachineEffect("$65,189")
                }

                else if (ficoScore === "600-649") {
                    $(".main-header").html("40 points could cost you as much as<span><canvas></canvas></span>on your loan");
                    $(".main-subtitle").html("We've helped thousands improve their credit scores. See if we can help you too.");
                    slotMachineEffect("$42,143")
                }

                else if (ficoScore === "650+") {
                    if (negativeItems === "0-items") {
                        $(".main-header").html("40 points could cost you as much as<span><canvas></canvas></span>on your loan");
                        $(".main-subtitle").html("You reported a good credit score. That doesn't mean we can't help you, however. " +
                            "Lexington Law also offers identity protection, personal finance and credit monitoring tools.");
                        slotMachineEffect("$11,315")
                    }
                    else {
                        $(".main-header").html("40 points could cost you as much as<span><canvas></canvas></span>on your loan");
                        $(".main-subtitle").html("We've helped thousands improve their credit scores. See if we can help you too.");
                        slotMachineEffect("$11,315")
                    }
                }

                $(".disclosure-text").html("&#42; The 30&#45;year fixed mortgage APRs are estimated based on the following " +
                    "        assumptions. FICO&#174; scores between 620 and 850 (500 and 619) assume a Loan Amount of &#36;150,000, 1.0 (0.0) " +
                    "        points, a Single Family &#45; Owner Occupied Property Type and an 80&#37; (60&#45;80&#37;) Loan&#45;to&#45;Value " +
                    "        Ratio");

                finalResults();

                break;

            case "loan":

                if (ficoScore === "less-than-549") {
                    $(".main-header").html("40 points could cost you as much as<span><canvas></canvas></span>on your loan");
                    $(".main-subtitle").html("We've helped thousands improve their credit scores. See if we can help you too.");
                    slotMachineEffect("$65,189")
                }

                else if (ficoScore === "550-599") {
                    $(".main-header").html("40 points could cost you as much as<span><canvas></canvas></span>on your loan");
                    $(".main-subtitle").html("We've helped thousands improve their credit scores. See if we can help you too.");
                    slotMachineEffect("$65,189")
                }

                else if (ficoScore === "600-649") {
                    $(".main-header").html("40 points could cost you as much as<span><canvas></canvas></span>on your loan");
                    $(".main-subtitle").html("We've helped thousands improve their credit scores. See if we can help you too.");
                    slotMachineEffect("$42,143")
                }

                else if (ficoScore === "650+") {
                    if (negativeItems === "0-items") {
                        $(".main-header").html("40 points could cost you as much as<span><canvas></canvas></span>on your loan");
                        $(".main-subtitle").html("You reported a good credit score. That doesn't mean we can't help you, however. " +
                            "Lexington Law also offers identity protection, personal finance and credit monitoring tools.");
                        slotMachineEffect("$11,315")
                    }
                    else {
                        $(".main-header").html("40 points could cost you as much as<span><canvas></canvas></span>on your loan");
                        $(".main-subtitle").html("We've helped thousands improve their credit scores. See if we can help you too.");
                        slotMachineEffect("$11,315")
                    }
                }

                $(".disclosure-text").html("&#42; The 30&#45;year fixed mortgage APRs are estimated based on the following " +
                    "        assumptions. FICO&#174; scores between 620 and 850 (500 and 619) assume a Loan Amount of &#36;150,000, 1.0 (0.0) " +
                    "        points, a Single Family &#45; Owner Occupied Property Type and an 80&#37; (60&#45;80&#37;) Loan&#45;to&#45;Value " +
                    "        Ratio");

                finalResults();

                break;

            case "car":

                if (ficoScore === "less-than-500") {
                    $(".main-header").html("100 points could cost you as much as<span><canvas></canvas></span>on your auto loan interest rate");
                    $(".main-subtitle").html("We've helped thousands improve their credit scores. See if we can help you too.");
                    slotMachineEffect("19%")
                }

                else if (ficoScore === "501-599") {
                    $(".main-header").html("100 points could cost you as much as<span><canvas></canvas></span>on your auto loan interest rate");
                    $(".main-subtitle").html("We've helped thousands improve their credit scores. See if we can help you too.");
                    slotMachineEffect("37%")
                }

                else if (ficoScore === "600-659") {
                    $(".main-header").html("60 points could cost you as much as<span><canvas></canvas></span>on your auto loan interest rate");
                    $(".main-subtitle").html("We've helped thousands improve their credit scores. See if we can help you too.");
                    slotMachineEffect("40%")
                }

                else if (ficoScore === "660+") {
                    $(".main-header").html("60 points could cost you as much as<span><canvas></canvas></span>on your auto loan interest rate");
                    $(".main-subtitle").html("We've helped thousands improve their credit scores. See if we can help you too.");
                    slotMachineEffect("22%");
                }

                $(".disclosure-text").html("&#42; The 60&#45;month new auto loan APRs are estimated based on the following " +
                    "assumptions. FICO&#174; scores between 620 and 850 (500 and 619) assume a Loan Amount of &#36;10,000 and &#36;20,000, " +
                    "60 months and Interest rates are fixed for the term of the loan");

                finalResults();

                break;

            case "credit-card":

                if (ficoScore === "less-than-630") {
                    $(".main-header").html("60 points could cost you as much as<span><canvas></canvas></span>on your auto loan interest rate");
                    $(".main-subtitle").html("We've helped thousands improve their credit scores. See if we can help you too.");
                    slotMachineEffect("19%")
                }

                else if (ficoScore === "631-689") {
                    $(".main-header").html("60 points could cost you as much as<span><canvas></canvas></span>on your auto loan interest rate");
                    $(".main-subtitle").html("We've helped thousands improve their credit scores. See if we can help you too.");
                    slotMachineEffect("17%")
                }

                else if (ficoScore === "690-719") {
                    $(".main-header").html("60 points could cost you as much as<span><canvas></canvas></span>on your auto loan interest rate");
                    $(".main-subtitle").html("We've helped thousands improve their credit scores. See if we can help you too.");
                    slotMachineEffect("22%")
                }

                else if (ficoScore === "720+") {
                    $(".main-header").html("Good Credit!");
                    $(".main-subtitle").html("You reported a good credit score. That doesn't mean we can't help you, however. " +
                        "Lexington Law also offers identity protection, personal finance and credit monitoring tools.");
                }

                $(".disclosure-text").html("This is the interest rate plus all fees, calculated on an annual basis and expressed as a percentage. " +
                    "Borrowers with higher credit scores typically receive lower APRs, but lenders may also take into account " +
                    "your debt&#45;to&#45;income ration, among other factors.");

                finalResults();

                break;

            default:
                break;
        }



    }

    //Slot Machine Effect
    function slotMachineEffect(number) {

        first = true;
        text = number;  // The message displayed
        chars = '0123456789,$%';  // All possible Charactrers
        scale = (window.innerWidth < 420) ? 44 : 60;  // Font size and overall scale
        breaks = 0.003;  // Speed loss per frame
        endSpeed = 0.05;  // Speed at which the letter stops
        firstLetter = 100;  // Number of frames untill the first letter stopps (60 frames per second)
        delay = 5;  // Number of frames between letters stopping


        canvas = document.querySelector('canvas');
        ctx = canvas.getContext('2d');

        text = text.split('');
        chars = chars.split('');
        charMap = [];
        offset = [];
        offsetV = [];

        for (var i = 0; i < chars.length; i++) {
            charMap[chars[i]] = i;
        }

        for (var i = 0; i < text.length; i++) {
            var f = firstLetter + delay * i;
            offsetV[i] = endSpeed + breaks * f;
            offset[i] = -(1 + f) * (breaks * f + 2 * endSpeed) / 2;
        }


        (onresize = function () {

            if (first) {
                first = false;

                canvas.width = (window.innerWidth < 420) ? canvas.clientWidth : canvas.clientWidth + 120;
                canvas.height = canvas.clientHeight - 85;
            }

            else {
                return null;
            }
        })();


        requestAnimationFrame(loop = function () {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1;
            ctx.fillStyle = '#f3f5f5';
            ctx.fillRect(0, (canvas.height - scale) / 2, canvas.width, scale);
            for (var i = 0; i < text.length; i++) {
                ctx.fillStyle = '#2c495d';
                ctx.textBaseline = 'middle';
                ctx.textAlign = 'center';
                ctx.setTransform(1, 0, 0, 1, Math.floor((canvas.width - scale * (text.length - 1)) / 2), Math.floor(canvas.height / 2));
                var o = offset[i];
                while (o < 0) o++;
                o %= 1;
                var h = Math.ceil(canvas.height / 2 / scale);
                for (var j = -h; j < h; j++) {
                    var c = charMap[text[i]] + j - Math.floor(offset[i]);
                    while (c < 0) c += chars.length;
                    c %= chars.length;
                    var s = 1 - Math.abs(j + o) / (canvas.height / 2 / scale + 1);
                    ctx.globalAlpha = s;
                    ctx.font = scale * s + 5 + 'px Museo';
                    ctx.fillText(chars[c], scale * i, (j + o) * scale);
                }
                offset[i] += offsetV[i];
                offsetV[i] -= breaks;
                if (offsetV[i] < endSpeed) {
                    offset[i] = 0;
                    offsetV[i] = 0;
                }
            }

            requestAnimationFrame(loop);
        });
    }

    //Open Modals
    function modalOpen() {
        $(".overlay").addClass("activateModal");
        $(".modal-quiz").addClass("activateModal");

        $("body").css("overflow", "hidden");
    }

    function modalClose() {

        $(".overlay").removeClass("activateModal");
        $(".modal-quiz").removeClass("activateModal");

        $("body").css("overflow", "auto");

    }


    function creditScore(typeOfCredit) {

        if (typeOfCredit === "home" || typeOfCredit === "loan") {

            $("#form2-one").val("less-than-549");
            $(".form2-one-text").text("< 549");

            $("#form2-two").val("550-599");
            $(".form2-two-text").text("550-599");

            $("#form2-three").val("600-649");
            $(".form2-three-text").text("600-649");

            $("#form2-four").val("650+");
            $(".form2-four-text").text("650+");


        }

        if (typeOfCredit === "car") {

            $("#form2-one").val("less-than-500");
            $(".form2-one-text").text("< 500");

            $("#form2-two").val("501-599");
            $(".form2-two-text").text("501-599");

            $("#form2-three").val("600-659");
            $(".form2-three-text").text("600-659");

            $("#form2-four").val("660+");
            $(".form2-four-text").text("660+");

        }

        if (typeOfCredit === "credit-card") {

            $("#form2-one").val("less-than-630");
            $(".form2-one-text").text("< 630");

            $("#form2-two").val("631-689");
            $(".form2-two-text").text("631-689");

            $("#form2-three").val("690-719");
            $(".form2-three-text").text("690-719");

            $("#form2-four").val("720+");
            $(".form2-four-text").text("720+");
        }

    }

    //Displays result of test
    function finalResults() {
        //Shows All Form Questions
        $("#form1").removeClass("item-hide").addClass("item-show").css("height", "auto");
        $("#form2").removeClass("item-hide").addClass("item-show").css("height", "auto");
        $("#form3").removeClass("item-hide").addClass("item-show").css("height", "auto");
        $(".results").css("height", "auto").addClass("item-show");
        $(".disclouse").show();

        //Hides Back Buttons
        $("#back-button-1").hide();
        $("#back-button-2").hide();


        //Scrolls to Form
        $('html, body').animate({
            scrollTop: $(".results").offset().top - 100
        }, 1000);

        //Disables Questions
        $("#form1 *").prop('disabled', true);
        $("#form2 *").prop('disabled', true);
        $("#form3 *").prop('disabled', true);
        $(".no-score").prop('disabled', true);


        //Disables Hover
        $(".questions").addClass("disabled").removeClass("has-hover");

        //Disables on Clicks
        $(".form1-questions").prop('onclick', null).off('click');
        $(".form2-questions").prop('onclick', null).off('click');
        $(".form3-questions").prop('onclick', null).off('click');
        $(".no-score").prop('onclick', null).off('click');

        //Enables Scrolling again on page
        $("body").css("overflow", "auto");
        $(".scrolling").css("height", "auto")

    }


    //Modal
    $(".no-score").on("click", function (e) {

        e.preventDefault();

        modalOpen();


    });

    $(".overlay").on("click", function (e) {

        e.preventDefault();

        modalClose();

    });

    $(".back-to-test-button").on("click", function (e) {

        e.preventDefault();

        modalClose();

    });

    $(".exit-modal").on("click", function (e) {

        e.preventDefault();

        modalClose();

    });


    //CSS Animation when button active
    $(".form1-questions").on("click", function () {

        $(".form1-questions").removeClass("active");

        $(this).addClass("active");

    });

    $(".form2-questions").on("click", function () {

        $(".form2-questions").removeClass("active");

        $(this).addClass("active");

    });

    $(".form3-questions").on("click", function () {

        $(".form3-questions").removeClass("active");

        $(this).addClass("active");

    });

    //Back Buttons
    $("#back-1").on("click", function () {

        $("input[name = \"image-pick\"]:checked").prop("checked", false);

        $(".form1-questions").removeClass("active");

        $("#form1").removeClass("item-hide");

        setTimeout(function () {
            $("#form1").css("height", "auto")
        }, 100);

        $("#form2").removeClass("item-show");

        setTimeout(function () {
            $("#form2").css("height", "0")
        }, 100);


    });

    $("#back-2").on("click", function () {

        $("input[name = \"fico-score\"]:checked").prop("checked", false);

        $(".form2-questions").removeClass("active");

        $("#form2").addClass("item-show");

        setTimeout(function () {
            $("#form2").css("height", "auto")
        }, 100);

        $("#form3").removeClass("item-show");

        setTimeout(function () {
            $("#form3").css("height", "0")
        }, 100);

    });

});