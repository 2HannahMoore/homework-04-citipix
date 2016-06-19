$(document).ready (function(){

  var city ='default';

  $('.entry').submit(changeBackground);

  function changeBackground(event){
    event.preventDefault();
  }

  $('#submit-btn').click(function(){
    var city = $('.city-type').val();
    $('#city-input').val('');
    console.log(city);

      if(city === "NYC" || city === "New York" || city === "New York City"){
          $('body').attr('class', 'nyc');
          } 
          else if (city === "San Francisco" || city === "SF" || city === "Bay Area"){
          $('body').attr('class', 'sf');
          }
          else if (city === "Los Angeles" || city === "LA" || city === "LAX"){
            $('body').attr('class','la');
          } 
          else if (city === "Austin" || city ==="ATX"){
            $('body').attr('class', 'austin');
          }
           else if (city === "Sydney" || city === "SYD") 
            $('body').attr('class', 'sydney');
});
});




//$(function(){

 // var newyork = ["New York", "New York City", "NYC"]
  //var sanfran = ["San Francisco", "SF", "Bay Area"]
 // var losangeles = ["Los Angeles", "LA", "LAX"]
  //var sydney = ["Sydney","SYD"]

  //function handleSubmit(event){
   // event.preventDefault();
   // console.log('form was submitted')

//submitting new york to change background image
 // function newyork(){
  //  $('newyork').submit-btn()
  //  $('newyork').css("background-image", ".nyc")

    //  }

  //}
//});

//Notes:

  //function submitCity()
     // if ($("#city-type").val("New York" or "New York City" or "NYC") = "yes"){
       // $()