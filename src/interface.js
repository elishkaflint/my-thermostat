$(document).ready(function() {

  var thermostat = new Thermostat();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e10d068b8fa9cbe5b525ae53bdd61655&units=metric', function(data) {
    $('#outside-temp').text(data.main.temp);
  })

  updateTemperature();
  updateUsage();
  $("#power-saving").text('On');

  $("#plus").click(function() {
    thermostat.up();
    updateTemperature();
    updateUsage();
  });

  $("#minus").click(function() {
    thermostat.down();
    updateTemperature();
    updateUsage();
  });

  $("#reset").click(function() {
    thermostat.reset();
    updateTemperature();
    updateUsage();
  });

  $("#ps-on").click(function() {
    thermostat.powerSaveModeOn();
    $("#power-saving").text('On');
    updateTemperature();
    updateUsage();
  });

  $("#ps-off").click(function() {
    thermostat.powerSaveModeOff();
    $("#power-saving").text('Off');
    updateTemperature();
    updateUsage();
  });

  function updateTemperature() {
    $("#current-temp").text(thermostat.getTemperature());
    $("#current-temp").attr('class', thermostat.usage());
  };

  function updateUsage() {
    $("#usage").text(thermostat.usage());
    $("#usage").attr('class', thermostat.usage());
  };

});
