function Thermostat () {
  this.defaultTemperature = 20;
  this.temperature = this.defaultTemperature;
  this.minimumTemperature = 10;
  this.powerSaveMode = true;
  this.powerSaveOnMaxTemp = 25;
  this.powerSaveOffMaxTemp = 32;
  this.mediumEnergyLimit = 18
}

Thermostat.prototype.getTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.getPowerSaveMode = function() {
  return this.powerSaveMode;
}

Thermostat.prototype.up = function() {
  if(this.temperature + 1 > this.maximumTemperature()) {
    throw new Error('Temperature at maximum')
  } else {
    this.temperature += 1
  }
}

Thermostat.prototype.down = function() {
  if(this.temperature - 1 < this.minimumTemperature) {
    throw new Error('Temperature at minimum')
  } else {
    this.temperature -= 1
  }
}

Thermostat.prototype.powerSaveModeOn = function() {
  this.powerSaveMode = true;
}

Thermostat.prototype.powerSaveModeOff = function() {
  this.powerSaveMode = false;
}

Thermostat.prototype.powerSaveStatus = function() {
  if (this.powerSaveMode === true) {
    return 'ON'
  } else {
    return 'OFF'
  }
}

Thermostat.prototype.maximumTemperature = function() {
  return (this.getPowerSaveMode() ? this.powerSaveOnMaxTemp : this.powerSaveOffMaxTemp );
}

Thermostat.prototype.reset = function() {
  this.temperature = this.defaultTemperature;
}

Thermostat.prototype.usage = function() {
  if(this.temperature < this.mediumEnergyLimit) {
    return 'low-usage'
  }
  if (this.temperature >= this.mediumEnergyLimit && this.temperature < this.powerSaveOnMaxTemp) {
    return 'medium-usage'
  }
  return 'high-usage'
}
