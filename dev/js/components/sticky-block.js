$(document).ready(function() {
	// review page sticky and scroll to section
	if ($('.review-aside').length) {
		$('.review-aside__inner').stick_in_parent({
			sticky_class: 'sticked'
		});
		$('.review-aside__list').on('click', 'a', function(e){
			e.preventDefault();

			var idSection = $(this).attr('href'),
				topOfSection = $(idSection).offset().top;

			$('body, html').animate({scrollTop: topOfSection}, 1500);
		});
	}
});