$(document).ready(function () {
    $("#test2").hide()
    $("#first").show()
    $("#second").hide()
    $("#test4").hide()
    $("#first2").show()
    $("#second2").hide()
    $("#up1").hide()
    $("#script1").hide()
    $("#up2").hide()
    $("#script2").hide()
    $("#up3").hide()
    $("#script3").hide()

    $("#test1").mouseover(function () {
        $("#test2").show()
        $("#first").hide()
        $("#second").show()
    });

    $("#test2").mouseleave(function () {
        $("#test2").hide()
        $("#first").show()
        $("#second").hide()
    });

    $("#test3").mouseover(function () {
        $("#test4").show()
        $("#first2").hide()
        $("#second2").show()

    });
    $("#test4").mouseleave(function () {
        $("#test4").hide()
        $("#first2").show()
        $("#second2").hide()
    });

    $("#down1").click(function () {
        $("#down1").hide()
        $("#up1").show()
        $("#script1").slideDown(1000)

    });

    $("#up1").click(function () {
        $("#up1").hide()
        $("#down1").show()
        $("#script1").slideUp(1000)
    });
    $("#down2").click(function () {
        $("#down2").hide()
        $("#up2").show()
        $("#script2").slideDown(1000)

    });

    $("#up2").click(function () {
        $("#up2").hide()
        $("#down2").show()
        $("#script2").slideUp(1000)
    });

    $("#down3").click(function () {
        $("#down3").hide()
        $("#up3").show()
        $("#script3").slideDown(1000)

    });

    $("#up3").click(function () {
        $("#up3").hide()
        $("#down3").show()
        $("#script3").slideUp(1000)
    });




});