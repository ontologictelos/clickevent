$(document).ready(function() {
    const $buttons = $('#reveal , #enlarge, #joke, #quote');
    const shadowColor = '#A9A9A9';
    const shadowHeight = 4;
    const image = new Image();
    image.src= 'image/minimalistcoffee.jpeg';
    $('#enlarge, #joke, #quote').hide();
    
    // Initial shadow state
    $buttons.css({
        'box-shadow': `0 ${shadowHeight}px 0 0 ${shadowColor}`,
        'position': 'relative',
        'top': '0',
        'transition': 'top 0.1s, box-shadow 0.1s'
    });

    // Mouse down event (button press)
    $buttons.on('mousedown', function() {
        $(this).css({
            'top': `${shadowHeight}px`,
            'box-shadow': `0 0 0 0 ${shadowColor}`
        });
    });

    // Mouse up event (button release)
    $buttons.on('mouseup mouseleave', function() {
        $(this).css({
            'top': '0',
            'box-shadow': `0 ${shadowHeight}px 0 0 ${shadowColor}`
        });
    });

    $buttons.hover(
        function(){
        $(this).addClass("grey");
        console.log("hover in");
    },
        function(){
        $(this).removeClass("grey");
        console.log("hover out");
    }
)

$("#reveal").on('click', function() {
    $('#imageContainer').html('<img src="image/minimalistcoffee.jpeg">').fadeIn(1000);
    $('#enlarge').fadeIn(500);
    $('#joke').fadeIn(500);
    $('#quote').fadeIn(500);
});

$("#enlarge").on('click', function(){
    $('#imageContainer').toggleClass("largeContainer").fadeIn(1000);
})

$('#joke').on('click',function(){
    $.ajax({
        url: "https://api.api-ninjas.com/v1/chucknorris",
        type: "GET",
        headers:{
            'X-Api-Key': 'vtn/UcgxrMs3iP9XSDMXeQ==w0yK9gTiSr75YhGt' 
        },
        success: function (data) {
            // Test logs
            console.log("Data received:", data);
            console.log("Data type:", typeof data);
            console.log("Div exists:", $('#chuck').length);
            
            // Access the joke property of the data object
            $('#chuck').text(data.joke);
            $('#chuck').fadeIn(500); // Fade in the data
        },
    
        error:function (data){
            alert('an error occurred');
        }
    })
});

$('#quote').on('click', function(){
    $.ajax({
        // Where to get data, type of data, api key
        url: "https://api.api-ninjas.com/v1/quotes",
        type: "GET",
        headers:{
            'X-Api-Key': 'vtn/UcgxrMs3iP9XSDMXeQ==w0yK9gTiSr75YhGt' 
        },

        // if else functions
        success: function(data) {
            // Test logs
            console.log("Data received:", data);
            console.log("Data type:", typeof data);
            console.log("Div exists:", $('#saying').length);

            // Data is an array, get first quote object, this is confusing. Convert data from object to string?
            const quoteData = data[0];
            // Access quote and author properties, this makes sense
            $('#saying').text(`${quoteData.quote} - ${quoteData.author}`);
            $('#saying').fadeIn(500); // Fade in data
        },

        error: function(data){
            alert('an error occurred');
        }
    })
})

$( function() {
    $( "#menu" ).menu();
  } );

  $( function() {
    $( "#datepicker" ).datepicker();
  } );

  $( function() {
    $( "#tabs" ).tabs();
  } );

});