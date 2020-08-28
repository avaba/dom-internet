$(document).ready(function() {
    // if modalWindow is visible - make page noscrollable 
    var scrlTop;
    $(window).on('scroll', function() {
        scrlTop = `${window.scrollY}px`;
    });
    var showDialog = function () {
        var body = document.body;
        body.style.position = 'fixed';
        body.style.width = '100%';
        body.style.top = `-${scrlTop}`;
    };
    var closeDialog = function () {
        var body = document.body;
        var scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    
    $('.modal').on('show.bs.modal', function (event) {
        $('html').addClass('no-scroll');
        showDialog();
    }).on('hidden.bs.modal', function () {
        closeDialog();
        $('html').removeClass('no-scroll');
    });
});