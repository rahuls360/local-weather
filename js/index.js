$(document).ready(function(){
  var json;
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude, function(json){
                  
      $(".weather-info").text(json.weather[0].main);
      $(".temperature").text(json.main.temp);  
      $('.city').text(json.name);
    });
      
      $("button").on("click", function(){
        var t;
        if(document.querySelector('.celcius') != null){
          t= document.querySelector(".temperature").textContent * 9/5 + 32;
          $("button").text("*F");
        }
        else{
             t= (document.querySelector(".temperature").textContent - 32) * 5/9;
              $("button").text("*C");
           }
        $("button").toggleClass("celcius");
          $(".temperature").text(t.toFixed(2));
      });
      
  });
  }
});