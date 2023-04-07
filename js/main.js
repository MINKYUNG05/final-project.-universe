

//automatically start
$(document).ready(function () {

    //click start
    // $("#maintitle").click(function () {

    // upper
    $("#name1").animate({
        height: '850px', opacity: 1,
    }, 'slow');
    $("#name2").animate({
        height: '650px', opacity: 1,
    }, 'slow');
    $("#name3").animate({
        height: '450px', opacity: 1,
    }, 'slow');

    // down
    $("#name4").animate({
        top: '550px', opacity: 1,
    }, 'slow');
    $("#name5").animate({
        top: '650px', opacity: 1,
    }, 'slow');
    $("#name6").animate({
        top: '750px', opacity: 1,
    }, 'slow');

    //img
    $("#logo").animate({
        bottom: '-15%', opacity: 1,
    }, 'slow');

    $(".text").animate({
        opacity: 1,
    }, 'slow');
    $(".text1").animate({
        opacity: 1,
    }, 'slow');


    //logo click
    $("#logo").click(function () {
        $(this).animate({
            width: '400px',
            bottom: '45%', left: '70%',
        }, 'slow');

        $(".names").fadeOut('slow');
        $(".text").fadeOut('slow');
        $(".text1").fadeOut('slow');

        $("#maintitle").animate({
            fontSize: '100px',
            top: '20%',
            left: '40%',
        })

    });
});



