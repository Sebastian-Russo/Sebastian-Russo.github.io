const handleBurger = () => {
    console.log('clicked')
    $('.nav-list').toggleClass('hidden');
}

$('#hamburger').click(() => handleBurger())
