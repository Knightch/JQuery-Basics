// using #append and #prepand
$('h1').append(" @Aman"); // using append to put value at last of selector
$('p').append("<br> Aman Pandey");
$('p').prepend("or Namaste  "); // using prepand to put value at front of selector

//doing same things in reverse order
$("<span> Pandey </span>").appendTo('h1');
$("<span> Hello </span>").prependTo('p');

//using #before
//$('p').before("<h2>Explaination about Jquery</h2>");
//using #after
//$('p').after("<br><button> Read More </button>")

//using before and after in reverse manner
$("<h2>Explaination about Jquery</h2>").insertBefore('p');
$("<br><button> Read More </button>").insertAfter('p');

//using #wrap
$('h1').wrap("<h3></h3>");

//using #remove
//$('p').remove(); //removing #p section
//using #detach 
$('.Intro').detach().insertAfter('.contact');
//using #empty
$('.contact').empty();
//using replace with
//$('h1').replaceWith('<h3>Lesson 2 ~DOM</h3>');
// using replace in reverse order
$('<h2> Hello I am intoduce Lessone 2 </h2>').replaceAll('h1');
const value = $('.Intro').attr('class');
console.log(value);
$('h4').attr('class','apply__style');

const find = $('.Intro').prop('class');
console.log(find);
$('h5').prop('class','apply__jquery');

$('h4').removeAttr('class');


