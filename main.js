$(document).ready(function() {
    const $buttons = $('#reveal , #enlarge');
    const shadowColor = '#A9A9A9';
    const shadowHeight = 4;
    const image = new Image();
    image.src= 'image/minimalistcoffee.jpeg';
    
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
    $('#imageContainer').html('<img src="image/minimalistcoffee.jpeg">');
    $('#enlarge').fadeIn(500);
});

$("#enlarge").on('click', function(){
    $('#imageContainer').toggleClass("largeContainer");
})
});