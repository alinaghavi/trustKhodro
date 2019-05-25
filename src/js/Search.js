import '../scss/Search.scss';
import "nouislider";
import "nouislider/distribute/nouislider.css";
import './wnumb-1.1.0/wNumb.js';

    // sidbar script
    //end  sidbar script


    //car-info script

    $('.car-item').hover(function () {

        $(this).find('.comment').fadeIn(300);

    }, function () {
        $(this).find('.comment').fadeOut();
    });

    // end car-info script


    //filter selected close btn-click


    $('body').on('click', '.close', function () {
        var $this = $(this);
        $this.parents('.filter_selected_span').remove();
        $('.checkbox').each(function(){
            if($this.parent().attr("data-id") == $(this).attr("data-id")){
                $(this).prop("checked" , false);
            }
        });
    });
    //end filter selected close btn-click


    // top-search-by-brand btn click
    var filterSelected = $('.filter_selected');


    $('.search_btn-by-brand').click(function () {

        filterSelected.find('.filter_selected_span').remove();

        var searchByBrand = $('.search_by_brand');
        var Item = searchByBrand.find('select option:selected');
        var index = 0;
        while (Item.eq(index).text().length > 0) {

            var title = Item.eq(index).text();
            var Id = Item.eq(index).attr('data-id');
            index++;
            if (Id) {
                var tag = ' <span data-id="' + Id + '" class="filter_selected_span border rounded">' + title + '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></span>';
                $(filterSelected).append(tag);
            }
        }

    });
    // end top-search-by-brand btn click


    // top-search-by-price btn click

    $('.price-search-see-cars-btn-wrap').eq(1).data("index" , 1);
    $('.price-search-see-cars-btn-wrap').eq(2).data("index" , 2);
    $('.price-search-see-cars-btn-wrap').eq(3).data("index" , 3);

    $('.price-search-see-cars-btn-wrap').click(function () {
        var $this2 = $(this);
        console.log($this2.attr("data-filter"));
        $('.filter_selected_span').each(function(){
            console.log($(this).attr("data-filter"));
            if($(this).attr("data-filter") == $this2.attr("data-filter")){
                console.log($(this).attr("data-filter"));
                $(this).remove();
            }
        });
        var SearchByPrice = $(this).parent();
        var price1 = SearchByPrice.find(".num1").val();
        var price2 = SearchByPrice.find(".num2").val();

        if ($(this).data("index") == $('.price-search-see-cars-btn-wrap').eq(3).data("index")) {
            var tag = ' <span class="filter_selected_span border rounded" data-filter="cost">' + 'از قیمت  ' + price1 + '  تا  ' + price2 + '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></span>';
            $(filterSelected).append(tag);
        }
        if ($(this).data("index") == $('.price-search-see-cars-btn-wrap').eq(2).data("index")) {
            var tag = ' <span class="filter_selected_span border rounded" data-filter="use">' + 'از  ' + price1 + '  تا کیلومتر  ' + price2 + '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></span>';
            $(filterSelected).append(tag);
        }
        if ($(this).data("index") == $('.price-search-see-cars-btn-wrap').eq(1).data("index")) {
            var tag = ' <span class="filter_selected_span border rounded" data-filter="type">' + 'از سال ' + price1 + ' تا '+ price2 +'<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></span>';
            $(filterSelected).append(tag);
        }

    });

    // end top-search-by-price btn click


    //add filter select

    var boxSidContent = $('.box-sid-content');
    var FiterItem = boxSidContent.find('.filter_item');

    FiterItem.click(function () {

        var Id = $(this).attr('data-id');
        var filter_selected_span = filterSelected.find('span[data-id=' + Id + ']');
        var len = filter_selected_span.length;
        if (len > 0) {
            filter_selected_span.remove();
            $(this).find('input').prop( "checked", false );

        } else {
            var title = $(this).find('label').text();
            var tag = ' <span data-id="' + Id + '" class="filter_selected_span border rounded">' + title + '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></span>';
            $(filterSelected).append(tag);
            $(this).find('input').prop( "checked", true );
        }

    });

    // end add filter select


    $('.gearbox_item').click(function () {
        $('.gearbox_item').removeClass('active');
        $(this).addClass('active');
        var Id = $(this).attr('data-id');
        var filter_selected_span = filterSelected.find('span[data-id=' + Id + ']');
        var len = filter_selected_span.length;
        if (len > 0) {
            filter_selected_span.remove();
        }
        var title = $(this).text();
        var tag = ' <span data-id="' + Id + '" class="filter_selected_span border rounded">' + 'گیربکس: ' + title + '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></span>';
        $(filterSelected).append(tag);

    });
    
    $(window).resize(function(){
        if($(window).width() >= 768){
            $('.main-content').addClass('d-block');
        }
        else {
            $('.main-content').removeClass('d-block');
        }
    });

    $('.mob-setting').click(function(){
        $('.side-bar').toggleClass('d-block');
        $('.main-content').toggleClass('d-none');
    });

$(document).ready(function () {
    var lowerNumber = document.getElementById('lower-number');
    var upperNumber = document.getElementById('upper-number');
    var slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        start: [2011, 2014],
        connect: true,
        step : 1,
        direction : "rtl",
        range: {
            'min': 2010,
            'max': 2015
        },
        format: wNumb({
            decimals: 0,
        })
    });


    slider.noUiSlider.on('update', function (values, handle) {

        var value = values[handle];

        if (handle) {
            upperNumber.value = value;
        } else {
            lowerNumber.value = value;
        }
    });

    lowerNumber.addEventListener('change', function () {
        slider.noUiSlider.set([this.value, null]);
    });

    upperNumber.addEventListener('change', function () {
        slider.noUiSlider.set([null, this.value]);
    });
    $(".price-search-see-cars-btn-wrap").click(function(){
       $
    });
});
$(document).ready(function () {
    var lowerNumber2 = document.getElementById('lower-number2');
    var upperNumber2 = document.getElementById('upper-number2');
    var slider2 = document.getElementById('slider2');
    noUiSlider.create(slider2, {
        start: [30000, 50000],
        connect: true,
        direction : "rtl",
        step : 1,
        range: {
            'min': 30000,
            'max': 50000
        },
        format: wNumb({
            decimals: 0,
        })
    });
    slider2.noUiSlider.on('update', function (values, handle) {

        var value = values[handle];

        if (handle) {
            upperNumber2.value = value;
        } else {
            lowerNumber2.value = value;
        }
    });

    lowerNumber2.addEventListener('change', function () {
        slider2.noUiSlider.set([this.value, null]);
    });

    upperNumber2.addEventListener('change', function () {
        slider2.noUiSlider.set([null, this.value]);
    });
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
