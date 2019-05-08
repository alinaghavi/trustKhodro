import '../scss/Order.scss';
$('.rounded-icon').hover(function(){
    $(this).toggleClass('shadow-sm');
    $(this).toggleClass('shadow');
});
$('.gallery-img').click(function () {
    var targetAddress = $(this).children().attr('src');
    $('.request-img').attr('src', targetAddress);
});