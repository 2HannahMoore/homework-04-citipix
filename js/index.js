$(document).ready(function(){

  $('#city-name').submit(changeBackground);

  function changeBackground(event){
    event.preventDefault();

    var city = $('#city-type').val().toUpperCase();

    if(city === "NYC" || city === "NEW YORK" || city === "NEW YORK CITY") {
        $('body').attr('class', 'nyc');
        } 
        else if (city === "SAN FRANCISCO" || city === "SF" || city === "BAY AREA"){
        $('body').attr('class', 'sf');
        }
        else if (city === "LOS ANGELES" || city === "LA" || city === "LAX") {
          $('body').attr('class','la');
        } 
        else if (city === "AUSTIN" || city ==="ATX") {
          $('body').attr('class', 'austin');
        }
         else if (city === "SYDNEY" || city === "SYD") {
          $('body').attr('class', 'sydney');
        } else { 
          $('body').attr('class', '');
          $('.city-type').val('');
        }

      $('#city-type').val('');
    }
});
