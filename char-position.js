function countLetters(inputString) {
  var outputObject = {};
    for (var i = 0; i < inputString.length; i++) {
      // console.log('this is i: ', i);
      // console.log('this is input: ', inputString);
      var characters = inputString[i];
        if (characters in outputObject) {
          outputObject[characters].push(i);
        } else if (characters != ' ') {
          outputObject[characters] = [i];
        }
    }
    return outputObject;
}

console.log(countLetters("lighthouse labs"));

