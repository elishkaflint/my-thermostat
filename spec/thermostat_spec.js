describe('Thermostat:', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  })

  describe('.initialize', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.getTemperature()).toEqual(20)
    })
    it('has a minimum temperature of 10 degrees', function() {
      expect(thermostat.minimumTemperature).toEqual(10)
    })
    it('starts with power save mode on', function() {
      expect(thermostat.powerSaveMode).toBe(true)
    })
  })

  describe('.up', function() {
    it('increases the temperature by one degree', function() {
      thermostat.up()
      expect(thermostat.getTemperature()).toEqual(21)
    });
  });

  describe('.down', function() {
    it('decreases the temperature by one degree', function() {
      thermostat.down()
      expect(thermostat.getTemperature()).toEqual(19)
    });
  });

  describe('.powerSaveModeOff', function() {
    it('turns the power save mode off', function() {
      thermostat.powerSaveModeOff();
      expect(thermostat.powerSaveMode).toBe(false);
    });
  });

  describe('.powerSaveModeOn', function() {
    it('turns the power save mode on', function() {
      thermostat.powerSaveModeOff();
      thermostat.powerSaveModeOn();
      expect(thermostat.powerSaveMode).toBe(true);
    });
  });


});
