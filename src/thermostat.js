function Thermostat () {
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.powerSaveMode = true;
}

Thermostat.prototype.getTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.up = function() {
  this.temperature += 1
}

Thermostat.prototype.down = function() {
  this.temperature -= 1
}

Thermostat.prototype.powerSaveModeOn = function() {
  this.powerSaveMode = true;
}

Thermostat.prototype.powerSaveModeOff = function() {
  this.powerSaveMode = false;
}
