$(document).ready(function() {

  var thermostat = new Thermostat();

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?';
    var location = 'q=' + city;
    var key = '&appid=e10d068b8fa9cbe5b525ae53bdd61655'
    var units = '&units=metric'
    $.get(url + location + key + units, function(data){
      $('#outside-temp').text(data.main.temp);
    })
  }

  displayWeather('london');
  updateTemperature();
  updateUsage();
  $("#power-saving").text(thermostat.powerSaveStatus());
  $("#power-saving").attr('class', thermostat.powerSaveStatus());

  $("#plus").click(function() {
    thermostat.up();
    refreshInfo();
  });

  $("#minus").click(function() {
    thermostat.down();
    refreshInfo();
  });

  $("#reset").click(function() {
    thermostat.reset();
    refreshInfo();
  });

  $("#ps-on").click(function() {
    thermostat.powerSaveModeOn();
    $("#power-saving").text(thermostat.powerSaveStatus());
    $("#power-saving").attr('class', thermostat.powerSaveStatus());
    refreshInfo();
  });

  $("#ps-off").click(function() {
    thermostat.powerSaveModeOff();
    $("#power-saving").text(thermostat.powerSaveStatus());
    $("#power-saving").attr('class', thermostat.powerSaveStatus());
    refreshInfo();
  });

  $("#current-city").change(function() {
    var city = $("#current-city").val();
    displayWeather(city);
  });

  function updateTemperature() {
    $("#current-temp").text(thermostat.getTemperature());
    $("#current-temp").attr('class', thermostat.usage());
  };

  function updateUsage() {
    $("#usage").text(thermostat.usage());
    $("#usage").attr('class', thermostat.usage());
  };

  function refreshInfo() {
    updateTemperature();
    updateUsage();
  }

});
