$(function() {
  var $pin = $('.pin'),
      $stage = $('.stage');



  console.log('start');

  $(document).on('touchstart click', function(event) {
    event.preventDefault();
    $pin.show();
    $pin.toggleClass('touched');

    $stage.show('fast');

    if ($('.circle').not(':visible').length > 0) {
      $('.circle').show('fast').circleProgress({
        size: 100,
        thickness: 5,
        value: 0.65,
        fill: {
            color: '#3399FF'
          }
      });

      $('.circle2').show('fast').circleProgress({
        size: 100,
        thickness: 5,
        value: 0.35,
        fill: {
          color: '#3399FF'
        },
        animation: {
          duration: 1800
        }
      });
    }
  });

  $(document).on('touchmove', function(event) {
    event.preventDefault();
    // $dir.css('left', event.originalEvent.touches[0].clientX - 10);
    // $dir.css('top', event.originalEvent.touches[0].clientY - 10);
  });
});
