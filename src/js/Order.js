import './all-import.js';
import '../scss/Order.scss';
import './jQuery-Plugin-Drag-To-Scroll-dragScroll/dragScroll.js';
import '../css/jquery.mCustomScrollbar.css';
import 'malihu-custom-scrollbar-plugin';
import '../js/jquery.mousewheel.js';
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