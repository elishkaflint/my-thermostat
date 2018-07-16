describe('Thermostat:', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  })

  it('starts at 20 degrees', function() {
    expect(thermostat.getTemperature()).toEqual(20)
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

});
