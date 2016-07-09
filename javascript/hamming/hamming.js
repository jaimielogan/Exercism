
var Hamming = function() {
};

Hamming.prototype.compute = function(input1,input2) {
  var count = 0;
  for (i=0; i<input1.length; i++){
	   if(input1[i] !== input2[i]){
		     count++;
	      }
    }
  return count;
};

module.exports = Hamming;
