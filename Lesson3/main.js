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

    // $(window).scroll(function(){
    //     alert('hello , myself Aman')
    // })
    $(window).resize(function () {
        $('.s1').css('background-color', 'green');
    })

    $('.btn').click(function () {
        $('p').css('font-size', '30px');
        $('h2').css('font-size', '26px');
        $('h4').css('font-size', '28px');
        $('.Intro__Text').css('background-color', 'darkorange');
        $('.Intro__Text').css('width', '500px');
        $('.Intro__Text').css('height', '50vh');
    }); // using click function in short way

    $('#ch__color').dblclick(function () {
        $('.s1').css('background-color', '#4b0082');
        $('.s2').css('background-color', '#add8e6');
        $('.s3').css('background-color', '#ffa07a');
    })

    $('p').mouseenter(function () {
        $(this).css('background-color', 'black');
        $(this).css('color', 'green');
    })

    $('p').mouseleave(function () {
        $(this).css('background-color', 'green');
        $(this).css('color', 'white');
    })

    // $('h1').after('<input type="text"/>');
    // $('input').keydown(function(event){
    //     console.log(`you just typed the letter: ${event.key}, which is key-code: ${event.keyCode}`);    
    // });

    // $('h1').after('<input type="text"/>');
    // $('input').keyup(function(event){
    //     console.log(`you just typed the letter: ${event.key}, which is key-code: ${event.keyCode}`);    
    // });

    $('h1').after('<input type="text"/>');
    $('input').keypress(function(event){
        console.log(`you just typed the letter: ${event.key}, which is key-code: ${event.keyCode}`);    
    });
    
}); // we add ready funtion to use javascript file above the html.
