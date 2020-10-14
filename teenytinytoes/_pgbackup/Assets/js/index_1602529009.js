$(document).ready(function() {
    $('.slider').slider({
         height: 600
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
    $('.carousel').carousel({
      dist: 0,
      indicators: true
    });
    $('.main-carousel').flickity({
     // options
     cellAlign: 'left',
     contain: true,
    });
});