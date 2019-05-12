import './all-import.js';
import '../scss/Order.scss';
import bindDragScroll from './jQuery-Plugin-Drag-To-Scroll-dragScroll/dragScroll.js';
import '../css/jquery.mCustomScrollbar.css';
import 'malihu-custom-scrollbar-plugin';
import '../js/jquery.mousewheel.js';
var $container = $(".gallery");
var $scroller = $(".scroll-h");
bindDragScroll($container, $scroller);
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
if( isMobile.any() ){
    $scroller.css("overflow-x","scroll");
}
$('.rounded-icon').hover(function(){
    $(this).toggleClass('shadow-sm');
    $(this).toggleClass('shadow');
});
$('.gallery-img').click(function () {
    var targetAddress = $(this).children().attr('src');
    $('.request-img').attr('src', targetAddress);
});
// (function($){
//     $(window).on("load",function(){
//         $(".gallery").mCustomScrollbar(
//         {
//         axis : "x",
//         autoExpandScrollbar:true,
// 					advanced:{autoExpandHorizontalScroll:true},
//           mouseWheel : {axis : 'x',
//           scrollAmount: 200 
//         },
//         });
//     });
//   })(jQuery);
for(var a = 2; a < 7; a++){
    if($(".detail-item h6").length > 5){
            $(".card.details-1 .row").append('<div class = "col-lg"></div>');
            for(var i = 1; i < 6; i++){
                var h = $(".detail-item h6:nth-child("+ i +")");
                    $(".card.details-1 .row .col-lg:nth-child("+ a +")").append(h);
                    if($(".detail-item h6").length <= 5){
                        break;
                    }
            }
    }
}
$(".card.details-1 .row .col-lg:last-child").append($(".detail-item a"));
for(var a = 2; a < 7; a++){
    if($(".detail-item-2 h5").length > 3){
            $(".card-body.details-n-2 .row").append('<div class = "col-lg"></div>');
            for(var i = 1; i < 4; i++){
                var h = $(".detail-item-2 h5:nth-child("+ i +")");
                    $(".card-body.details-n-2 .row .col-lg:nth-child("+ a +")").append(h);
                    if($(".detail-item-2 h5").length <= 3){
                        break;
                    }
            }
    }
}