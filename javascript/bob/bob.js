//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
//
// YOUR CODE GOES HERE
//
// Test to see if the last character of the input is a question mark.
// If so, the input is a question.
if(input[input.length - 1] === "?"){
  return "Sure.";
}
//Test to see if the input is in uppercase
else if(input.toUpperCase() === input && /[A-Z]/.test(input)){
  return "Whoa, chill out!";
}
//Check to see if the input is blank or "silent".
// /\s+/g represents a blank space and replaces that blank space with an empty space.
// If the replaced input is empty, then the input wasa empty space and would therefore give the "fine be that way" output
else if (input.replace(/\s+/g,"") === ""){
  return "Fine. Be that way!";
}
//Any other input
else {
  return "Whatever.";
}


};

module.exports = Bob;
