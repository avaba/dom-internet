$(document).ready(function() {
    // comparison table scrolling
    function tableScroll() {
        if ($('.comparison__table').length) {
            var table = $('.comparison__table');
            var tableScrollPosition;
            var scrollWidth = table[0].scrollWidth - table.width();
            var step = table.data('scrollstep');
    
            if (table[0].scrollWidth == table.width()) {
                $('.comparison__table__scroll').addClass('unvisible');
            }
            
            $('.comparison__table__scroll.scroll-left').on('click', function() {
                if ($(this).hasClass('disabled')) {
                    return false
                }
                $('.scroll-right.disabled').removeClass('disabled');
    
                table.animate({
                    scrollLeft: table.scrollLeft() - step
                }, 500);
                
                if (table.scrollLeft() - step <= 0) {
                    $(this).addClass('disabled');
                }
            });
            $('.comparison__table__scroll.scroll-right').on('click', function() {
                if ($(this).hasClass('disabled')) {
                    return false
                }
                $('.scroll-left.disabled').removeClass('disabled');
                
                table.animate({
                    scrollLeft: table.scrollLeft() + step
                }, 500);
                
                if (scrollWidth <= table.scrollLeft() + step) {
                    $(this).addClass('disabled');
                }
            });
        }
    }
    tableScroll();
    $(window).on('resize', tableScroll);
});