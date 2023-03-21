

(function($) {

		$body = $('body');

	// Scrolly. Makes page scroll down when "GET STARTED WITH YOUR BUILD" button is pressed.
	$('.scrolly').scrolly();			

	// Menu.
		var $menu = $('#menu');		// Creates variable

		// Allows the user to click out of the nav component
		$menu
			.appendTo($body)	// Displays menu over webpage
			.on('click', function() {	// Click event handler
				
				$body.removeClass('is-menu-visible');	// Clears menu

			})
			
		// Toggles the nav menu when the icon is clicked
		$body.on('click', 'a[href="#menu"]', function() {	// Click event handler

					$body.toggleClass('is-menu-visible');	// Starts menu display animation

			})

})(jQuery);