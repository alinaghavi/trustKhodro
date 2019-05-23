import '../scss/shared.scss';
$('.sm-nav-header-icon').click(function(){
    $('.nav-header').fadeToggle("fast");
    $('.nav-header').toggleClass("d-flex");
});
$(document).click(function(event){
    var target = $(".nav-header, .sm-nav-header-icon");
        if(target.is(event.target) && !$('.sm-nav-header-icon').is(event.target) && target.css('display') == "flex"){
            $('.nav-header').fadeToggle("fast");
            $('.nav-header').toggleClass("d-flex");
            console.log($('.nav-header').css('display'));
        }
});