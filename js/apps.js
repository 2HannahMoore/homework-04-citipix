
$(document).ready(function(){


// $entry.submit(changePhoto);
// car city = 'default';
// function changePhoto
// var city = $entry.val()
// if 'nyc' || 'New York' || 'New York City'
// $('background')replace(nyc-img)
// else if 'san francisco' || 'sf'
// $('background')replace(sf-img)
// else $('background')replace(default-img)
// *puesdo code notes*

var city = 'default';

$('.entry').submit(changePhoto);

function changePhoto(event) {
  event.preventDefault();
  city = $('.city-type').val();
  if (city === ('nyc' || 'New York' || 'New York City')) {
    $('body').removeClass('nyc sf la austin sydney')
    $('body').addClass('nyc')
    $('.city-type').val('');
  } else if (city === ('sf' || 'Bay Area' || 'New York City')) {
    $('body').removeClass('nyc sf la austin sydney')
    $('body').addClass('sf')
    $('.city-type').val('');
  } else if (city === ('Los Angeles' || 'LA' || 'LAX')) {
    $('body').removeClass('nyc sf la austin sydney')
    $('body').addClass('la')
    $('.city-type').val('');
  } else if (city === ('Austin' || 'ATX')) {
    $('body').removeClass('nyc sf la austin sydney')
    $('body').addClass('austin')
    $('.city-type').val('');
  } else if (city === ('Sydney' || 'SYD')) {
    $('body').removeClass('nyc sf la austin sydney')
    $('body').addClass('sydney')
    $('.city-type').val('');
  } else {
    $('body').removeClass('nyc sf la austin sydney')
    $('.city-type').val('');
  }

  };


});