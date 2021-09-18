$('.btn').on('click', function(e){
    alert("hello , Dost");
    e.stopPropagation();
});
$('.Intro__Text').on('mouseenter',function(){
    alert("You just enter the mouse!");
})