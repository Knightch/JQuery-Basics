$(function () {
    // $('.btn').on('click', function (e) {
    //     alert("hello , Dost");
    //     e.stopPropagation();
    // });
    // $('.Intro__Text').on('mouseenter', function () {
    //     alert("You just enter the mouse!");
    //     $(this).css('background', 'black');
    // });
    // //$('.Intro__Text').off('mouseenter');

    $(window).scroll(function(){
        alert('hello , myself Aman')
    })
    $(window).resize(function(){
        $('.s1').css('background-color','green');
    })

    $('.btn').click(function(){
        $('p').css('font-size','30px');
        $('h2').css('font-size','26px');
        $('h4').css('font-size','28px');
        $('.Intro__Text').css('background-color','darkorange');
        $('.Intro__Text').css('width','500px');
        $('.Intro__Text').css('height','50vh');
    }); // using click function in short way
}); // we add ready funtion to use javascript file above the html.
