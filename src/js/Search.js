import '../scss/Search.scss'
    // sidbar script

    function showbox(tag) {

        var ParentItem = $(tag).parent('.box-sid');

        $('.box-sid-content', ParentItem).fadeToggle(100);
        $('.Collapse-icon', ParentItem).fadeToggle(100);
        $('.Collapse-down-icon', ParentItem).fadeToggle(100);

    }

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
        $(this).parents('.filter_selected_span').remove();
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


    $('.search_btn-by-price').click(function () {
        filterSelected.find('.filter_selected_span').remove();

        var SearchByPrice = $('.search_by_price');
        var price1 = SearchByPrice.find('#price1').val();
        var price2 = SearchByPrice.find('#price2').val();
        var len1 = price1.length;
        var len2 = price2.length;

        if (len1 > 0 && len2 > 0) {
            var tag = ' <span class="filter_selected_span border rounded">' + 'از قیمت  ' + price1 + '  تا  ' + price2 + '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></span>';
            $(filterSelected).append(tag);
        }
        if (len1 > 0 && len2 == 0) {
            var tag = ' <span class="filter_selected_span border rounded">' + 'شروع قیمت از ' + price1 + '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></span>';
            $(filterSelected).append(tag);
        }
        if (len2 > 0 && len1 == 0) {
            var tag = ' <span class="filter_selected_span border rounded">' + 'تا قیمت ' + price2 + '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></span>';
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


    var GearboxItem = $('.gearbox_item').click(function () {

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

