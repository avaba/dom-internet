$(document).ready(function() {
    // sort btns
	$('.sort-btn').on('click', function() {
		$(this).siblings('.sort-btn.active').removeClass('active');
		$(this).addClass('active');
	});

	// collapse
	$('.collapse').each(function() {
		var $this = $(this);
		$this.on('show.bs.collapse', function() {
			$this.closest('.collapse-block').addClass('active')
		});
		$this.on('hide.bs.collapse', function() {
			$this.closest('.collapse-block').removeClass('active')
		});
	});
});