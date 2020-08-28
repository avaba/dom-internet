$(document).ready(function() {
   // filters block range slider
    var rangeArr = [];
    $('.filters__range').each(function() {
        var $this = $(this);
        var from = $this.data('from');
        var to = $this.data('to');
        var type = $this.data('type');
        var postfix = $this.data('postfix');
        if (type == 'single') {
            $this.addClass('single-item');
            $this.find('.filters__range-slider-wrap').append('<span class="single-val"></span>')
        } else  {
            $this.addClass('double-items')
            $this.find('.filters__range-slider-wrap').append('<span class="double-min-val"></span>')
            $this.find('.filters__range-slider-wrap').append('<span class="double-max-val"></span>')
        }
        var $slider = $this.find('.filter-range-slider');
        $slider.ionRangeSlider({
            type: type,
            min: from,
            max: to,
            grid: false,
            skin: "round",
            hide_from_to: true,
            hide_min_max: true,
            onChange: function(data) {
                if ($this.find('.single-val').length) {
                    $this.find('.single-val').text(data.from + ' ' + postfix);
                } else {
                    $this.find('.double-min-val').text(data.from + ' ' + postfix);
                    $this.find('.double-max-val').text(data.to + ' ' + postfix);
                }
            },
            onStart: function (data) {
                if ($this.find('.single-val').length) {
                    $this.find('.single-val').text(data.from + ' ' + postfix);
                } else {
                    $this.find('.double-min-val').text(data.from + ' ' + postfix);
                    $this.find('.double-max-val').text(data.to + ' ' + postfix);
                }
            }
        });
        var range = $slider.data("ionRangeSlider");
        rangeArr.push(range);
    });

    $('.filters__reset').on('click', function() {
        rangeArr.forEach(function(instance) {
            instance.reset();
        });
        $('.filters__range').each(function() {
            var $this = $(this);
            if ($this.find('.single-val').length) {
                $('.single-val').text($this.data('from') + ' ' + $this.data('postfix'));
            } else {
                $('.double-min-val').text($this.data('from') + ' ' + $this.data('postfix'))
                $('.double-max-val').text($this.data('to') + ' ' + $this.data('postfix'))
            }
        });
    });

    // filters show more mobile
    $('.filters__mobile-trigger').on('click', function() {
        $('body').addClass('filters-open');
    });
    $('.filters-mobile__close, .filter-agree').on('click', function() {
        $('body').removeClass('filters-open');
    })

    // tariff comparison
    $('.tariff-block__comparison').on('click', function() {
        var $this = $(this);
        var $parentBlock = $this.closest('.tariff-block');
        var $comparisonBlock = $('.comparison-block');
        var $comparisonCount = $comparisonBlock.find('.comparison-count');
        var $comparisonCountCurrent = +$comparisonCount.text();
        if (!$parentBlock.hasClass('in-comparison')) {
            $parentBlock.addClass('in-comparison');
            $comparisonCount.text($comparisonCountCurrent + 1);
            $comparisonBlock.addClass('active');
        } else {
            $parentBlock.removeClass('in-comparison');
            $comparisonCount.text($comparisonCountCurrent - 1);
            setTimeout(function() {
                if (+$comparisonCount.text() == 0) {
                    $comparisonBlock.removeClass('active');
                }
            }, 1000);
        }
    });

    $('.comparison-block').on('click', '.btn__reset', function() {
        var $parent = $(this).closest('.comparison-block');
        var $comparisoncount = $parent.find('.comparison-count');
        $('.tariff-block.in-comparison').removeClass('in-comparison');
        $comparisoncount.text(0);
        setTimeout(function() {
            $parent.removeClass('active');
        }, 500);
    });
});