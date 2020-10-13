$(document).ready(function() {
    var slider = document.querySelector('#slider');
			imagesLoaded(slider, function() {
			// load flickity only when images have all loaded
			var flkty = new Flickity( slider, {
				cellAlign: 'left',
				contain: true,
				prevNextButtons: false,
				pageDots: false,
				autoPlay: 2000,
				wrapAround: true,
				selectedAttraction: 0.01,
			});
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    $('.modal-trigger').leanModal();
    });
