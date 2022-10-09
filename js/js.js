$('.jobs__role').click(function(){
    if($(document).width() > 1150){
        $(this).children('.jobs__job').children('.jobs__jobDescription').slideToggle(300)
        $(this).children('.jobs__job').children('.jobs__jobTitle').toggleClass('jobs__jobTitle-transformed')
        $(this).children('.jobs__details').children('.jobs__location').toggleClass('jobs__location-transformed')
        $(this).toggleClass('jobs__role-transformed')
        $(this).children('.jobs__details').children('.jobs__image').toggleClass('jobs__image-toggleTransform')    
    }
})

$('.features__item').click(function(){
    $(this).children('.features__description').slideToggle(300)
    $(this).children('.features__head').children('.features__title').toggleClass('features__title-transformed')
    $(this).toggleClass('features__item-transformed')
})

$('.modal').click(function(e){
    switch ($(e.target).closest('.modal__window').length){
        case 0:
            $(this).fadeOut()
        case 1:
            if($(e.target)[0] == $('.modal__close').children('img')[0]){
                $(this).fadeOut()
            }
    }
})

$('#openModalOne').click(function(){
    $('.modal').fadeIn()
})

$('#openModalTwo').click(function(){
    $('.modal').fadeIn()
})

$('#openModalThree').click(function(){
    $('.modal').fadeIn()
})

$('#openModalFour').click(function(){
    $('.modal').fadeIn()
})

$(window).on('scroll', function(){
    if($(this).scrollTop() > 500){
        $('#up').fadeIn()
        $('#up').css({'display': 'flex'})
    }else{
        $('#up').fadeOut()
    }
})

$('#up').click(function(){
    $('html, body').animate({scrollTop: 0}, 500)
})

$('#button').click(function(e){
    e.preventDefault()
    let email = $('#email').val().trim()

    $.ajax({
        url: 'ajax/telegram.php',
        type: 'POST',
        cache: false,
        data: {'email': email},
        dataType: 'html',
    })
})

$('#modal__button').click(function(e){
    e.preventDefault()
    let email = $('#modal__email').val().trim()

    $.ajax({
        url: 'ajax/telegram.php',
        type: 'POST',
        cache: false,
        data: {'email': email},
        dataType: 'html',
    })
})