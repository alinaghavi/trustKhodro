import '../scss/DashboardIndex.scss';
import '../css/select2.min.css';
import '../js/select2.min';

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

    $('.select-box').select2();
});