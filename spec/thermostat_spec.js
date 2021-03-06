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
    it('throws an error if the temperature is lower than the min temp', function() {
      for(var i = 0; i < 10; i++) {
        thermostat.down()
      }
      expect(function() {thermostat.down() }).toThrow(new Error('Temperature at minimum'))
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
      expect(thermostat.maximumTemperature()).toEqual(32);
    });
    it('decreases the max temp if power save mode is on', function() {
      thermostat.powerSaveModeOff();
      thermostat.powerSaveModeOn();
      expect(thermostat.maximumTemperature()).toEqual(25);
    });
  });

  describe('.reset', function() {
    it('resets the thermostat to 20', function() {
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature).toBe(20);
    });
  });

  describe('.usage', function() {
    describe('when the usage is <18', function() {
      it('returns low usage', function() {
        for(var i = 0; i < 3; i++) {
          thermostat.down()
        }
        expect(thermostat.usage()).toEqual('low-usage');
      });
    });
    describe('when the usage is <25', function() {
      it('returns medium usage', function() {
        for(var i = 0; i < 4; i++) {
          thermostat.up()
        }
        expect(thermostat.usage()).toEqual('medium-usage');
      });
    });
    describe('when the usage is > 25', function() {
      it('returns medium usage', function() {
        for(var i = 0; i < 4; i++) {
          thermostat.up()
        }
        expect(thermostat.usage()).toEqual('medium-usage');
      });
    });
  });

});
