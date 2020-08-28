$(document).ready(function() {
    // header menu trigger
	$('.header__menu-trigger').on('click', function() {
		$('.header__menu').toggleClass('active');
		$('body').toggleClass('menu-open');
	});

	// city choose
	$('.city__choose__trigger').on('click', function() {
		$(this).closest('.city__choose').toggleClass('active');
	});
	$('.city_confirm').on('click', function() {
		$(this).closest('.city__choose').removeClass('active');
	});

	// form
	$('.form-control').on('input', function() {
		if ($(this).val().length > 0) {
			$(this).addClass('is-filled')
		} else {
			$(this).removeClass('is-filled')
		}
	});

	// search filed
	$('.header__search-trigger').on('click', function() {
		$('.search-field').addClass('active');
	});
	$('.search-field__close').on('click', function() {
		var $this = $(this);
		$this.closest('.search-field').removeClass('active');
	});
});