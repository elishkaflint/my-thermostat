$(document).ready(function() {

  var thermostat = new Thermostat();

  updateTemperature();
  updateUsage();

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
