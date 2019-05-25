import '../scss/shared.scss';
$('.sm-nav-header-icon').click(function(){
    $('.nav-header').addClass("d-flex");
    $('.shadow-on-nav').css("display" ,"block");
    // $(".nav-header").css("transition" , "all .5s cubic-bezier(0.4, 0.0, 0.2, 1)");
    $('.nav-header').css("transform" , "translateX(0)");
});
var target = $(".nav-header, .sm-nav-header-icon");
$(document).click(function(){
        if(target.css('display') == "flex"){
            // $(".nav-header").css("transition" , "all .5s cubic-bezier(0.0, 0.0, 0.2, 1)");
            $('.shadow-on-nav').css("display" ,"none");
            $('.nav-header').css("transform", "");
            setTimeout(function(){
                $('.nav-header').removeClass("d-flex");
            },500);
        }
});

target.click(function(event){
    event.stopPropagation();
});