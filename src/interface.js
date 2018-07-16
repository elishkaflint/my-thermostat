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

  $("ps_on").click(function() {
    thermostat.powerSaveModeOn();
    updateTemperature();
    updateUsage();
  });

  $("ps_off").click(function() {
    thermostat.powerSaveModeOff();
    updateTemperature();
    updateUsage();
  });

  function updateTemperature() {
    $("#current_temp").text(thermostat.getTemperature());
  };

  function updateUsage() {
    $("#usage").text(thermostat.usage());
  };

});
