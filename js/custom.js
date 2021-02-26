$(document).ready(function () {
    $('.emphasis').each(function(idx, el){
        var _color = $(el).data('color');
        $(el).css('color', _color).children('code').css('color', _color);
    });

    $('.last-list').each(function(idx, el){
        var _el = $(el).closest('.md-typeset__scrollwrap');
        _el.appendTo(_el.prev().children('li').last());
    });

    $('a').on('click', function(e){
        var _el = $(this);
        $('a').removeClass('_current');
        $('a[href="'+ _el.attr('href') + '"]').addClass('_current');
    })
    $('a').removeClass('_current');
    $('a[href="'+ window.location.hash + '"]').addClass('_current');

    $('.blank-target-anchor a').attr('target', '_blank');

    $('.clients-only-apps-img-table').each(function(idx, el){
        var _el = $(el).parents('table');
        _el.find('img').css('max-width','40px');
        _el.find('img').css('margin','0');
        _el.find('img').css('padding','0');
        _el.find('img').css('border','none');
        _el.find('td').css('vertical-align','middle');
        _el.find('a').attr('target', '_blank');
    });
});