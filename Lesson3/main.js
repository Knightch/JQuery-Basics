$(function () {
    $('.btn').on('click', function (e) {
        alert("hello , Dost");
        e.stopPropagation();
    });
    $('.Intro__Text').on('mouseenter', function () {
        alert("You just enter the mouse!");
        $(this).css('background', 'black');
    });
    $('.Intro__Text').off('mouseenter');

    $(window).scroll(function(){
        alert('hello , myself Aman')
    })
    $(window).resize(function(){
        $('.s1').css('background-color','green');
    })
}); // we add ready funtion to use javascript file above the html.
