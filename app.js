const handleBurger = () => {
    console.log('clicked')
    $('.nav-list').toggleClass('hidden');

    if ($('.nav-list').hasClass('hidden')) {
        $('#hamburger').html("");
        $('#hamburger').html('Open');
    } else {
        $('#hamburger').html("");
        $('#hamburger').html('Close');
    }

}

$('#hamburger').click(() => handleBurger())

