var Gigasecond = function(input) {
  this.input = input;
};

Gigasecond.prototype.date = function() {

  var gs = new Date(this.input.getTime()+ Math.pow(10,12));
  return gs;

};

module.exports = Gigasecond;
