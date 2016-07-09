

var year = function(input) {
  this.input = input;
};

year.prototype.isLeap = function() {

  if ((this.input % 4 === 0 && this.input % 100 !== 0) || (this.input % 4 === 0 && this.input % 400 === 0)) {
    return true;
  }
  else {
    return false;
  }
};

module.exports = year;
