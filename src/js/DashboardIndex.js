import '../scss/DashboardIndex.scss';
import '../css/slick.css';
import '../js/slick.min.js';
import "nouislider";
import "nouislider/distribute/nouislider.css";
import './wnumb-1.1.0/wNumb.js';

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


















$(document).ready(function () {
    var lowerNumber3 = document.getElementById('lower-number3');
    var upperNumber3 = document.getElementById('upper-number3');
    var slider3= document.getElementById('slider3');
    noUiSlider.create(slider3, {
        start: [300000000, 550000000],
        connect: true,
        direction : "rtl",
        step : 10000,
        range: {
            'min': 300000000,
            'max': 550000000
        },
        format: wNumb({
            decimals: 0,
        })
    });
    slider3.noUiSlider.on('update', function (values, handle) {

        var value = values[handle];

        if (handle) {
            upperNumber3.value = value;
        } else {
            lowerNumber3.value = value;
        }
    });

    lowerNumber3.addEventListener('change', function () {
        slider3.noUiSlider.set([this.value, null]);
    });

    upperNumber3.addEventListener('change', function () {
        slider3.noUiSlider.set([null, this.value]);
    });
});

