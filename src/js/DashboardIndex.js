import '../scss/DashboardIndex.scss';
import '../css/slick.css';
import '../js/slick.min.js';

$(document).ready(function () {
    $("#search-wrapper .btns").hover(
        function () {
            var src = $(this).find('img');
            src.attr('src', src.attr('src').replace('.svg', '-hover.svg'));
        }, function () {
            var src = $(this).find('img');
            src.attr('src', src.attr('src').replace('-hover.svg', '.svg'));
        }
    );

    $("#link-wrapper a").click(function (e) {
        e.preventDefault();
        var target = $(this).attr('rel');
        $("#" + target).show().siblings("div").hide();
    });

    $("#search-car-btn").click(function (e) {
        e.preventDefault();
        $("#search-module").toggleClass("hidden");
    });

    $(".slider-handler").slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }

        ]
    });
});

$(document).click(function (event) {
    if ($(event.target).is("#search-module, #search-module *, #search-car-btn, #search-car-btn *")) return;
    $("#search-module").addClass("hidden");
});

