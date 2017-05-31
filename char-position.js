function countLetters(inputString){
  var outputObject = {};
  inputString = inputString.split(" ").join("");
  for (var i = 0; i < inputString.length; i++){
    var character = inputString[i];
    if (character in outputObject){
      outputObject[character].push(i);
    } else {
      outputObject[character] = [i];
    }
  }
  return outputObject;
}

console.log(countLetters("lighthouse in the house"));



























// ---------------------------- ORIGINAL SOLUTION 1:

// function countLetters(inputString) {
//   var outputObject = {};
//     for (var i = 0; i < inputString.length; i++) {
//       var characters = inputString[i];
//         if (characters in outputObject) {
//           outputObject[characters].push(i);
//         } else if (characters != ' ') {
//           outputObject[characters] = [i];
//         }
//     }
//     return outputObject;
// }

// console.log(countLetters("lighthouse in the house"));

// ---------------------------- ORIGINAL SOLUTION 2:

// function countLetters(input){
//   var output = {};
//   for (var i = 0; i < input.length; i++){
//     var character = input[i].toLowerCase();
//     // console.log("key: ", character + " value: ", i)
//     if (character in output){
//       output[character].push(i);
//     } else if (character != ' '){
//       output[character] = [i];
//     }
//   }
//   return output;
// }
//
// console.log(countLetters("lighthouse in the house"));
