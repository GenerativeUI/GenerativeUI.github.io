window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
		slidesToScroll: 1,
		slidesToShow: 2,
		loop: true,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 5000,
    }

    var options2 = {
		slidesToScroll: 2,
		slidesToShow: 2,
		loop: true,
		infinite: false,
		autoplay: false,
		autoplaySpeed: 5000,
    }


	// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	var carousels2 = bulmaCarousel.attach('.carousel2', options2);

    bulmaSlider.attach();

	function selectCategory(category) {
		$('.carousel').hide();
		$('#' + category + '-carousel').show();
	}

    $('#category-select').on('change', function() {
		selectCategory($(this).val());
    });
	selectCategory('main');
})
