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
    describe('when the power save mode is on', function() {
      it('throws an error if the temperature exceeds the max temp', function() {
        for(var i = 0; i < 5; i++) {
          thermostat.up()
        }
        expect(function() {thermostat.up() }).toThrow(new Error('Temperature at maximum'))
      });
    });
    describe('when the power save mode is off', function() {
      it('throws an error if the temperature exceeds the max temp', function() {
        thermostat.powerSaveModeOff();
        for(var i = 0; i < 12; i++) {
          thermostat.up()
        }
        expect(function() {thermostat.up() }).toThrow(new Error('Temperature at maximum'))
      });
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

  describe('.setMaximumTemperature', function() {
    it('increases the max temp if power save mode is off', function() {
      thermostat.powerSaveModeOff();
      expect(thermostat.MaximumTemperature()).toEqual(32);
    });
    it('decreases the max temp if power save mode is on', function() {
      thermostat.powerSaveModeOff();
      thermostat.powerSaveModeOn();
      expect(thermostat.MaximumTemperature()).toEqual(25);
    });
  });

});
