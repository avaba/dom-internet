$(document).ready(function() {
    // form
    $('.form-control').on('focusout', function() {
        if ($(this).val().length > 0) {
            $(this).addClass('is-filled')
        } else {
            $(this).removeClass('is-filled')
        }
    });

    // bootstrap select
    $('.selectpicker').each(function() {
        var $this = $(this);
        $this.on('changed.bs.select', function() {
            $this.closest('.bootstrap-select').addClass('selected-item');
        });
        $this.on('show.bs.select', function() {
            $this.closest('.bootstrap-select').addClass('dropdown-opened');
        });
        $this.on('hide.bs.select', function() {
            $this.closest('.bootstrap-select').removeClass('dropdown-opened');
        });
    });
});