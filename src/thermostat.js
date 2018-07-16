function Thermostat () {
  this.temperature = 20;
  this.startingTemperature = 20;
  this.minimumTemperature = 10;
  this.powerSaveMode = true;
  this.powerSaveOnMaxTemp = 25;
  this.powerSaveOffMaxTemp = 32;
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

Thermostat.prototype.maximumTemperature = function() {
  return (this.getPowerSaveMode() ? this.powerSaveOnMaxTemp : this.powerSaveOffMaxTemp );
}

Thermostat.prototype.reset = function() {
  this.temperature = this.startingTemperature;
}

Thermostat.prototype.usage = function() {
  if(this.temperature < 18) {
    return 'low-usage'
  } else if (this.temperature < 25) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  }
}
