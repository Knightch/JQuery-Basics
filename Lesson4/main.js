$.ajax({
    url:'http://localhost:8000/hello',
    success: function(result){
        console.log(result);
    }
});

$.get('http://localhost:8000/hello', function(result){
    console.log(result);
});

