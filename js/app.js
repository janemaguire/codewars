
// Find the longest word in a sentence
// function findLong(s){
//
//   var words = s.split(" ");
//
//   var sorted = words.sort(function (a, b) {
//       return a.length < b.length;
//     });
//
//     console.log(sorted[0]);
//
// }

// Find the length of the shortest word in a sentence
// function findShort(s){
//
//   var words = s.split(" ");
//
//   var sorted = words.sort(function (a, b) {
//       return a.length > b.length;
//     });
//
//     console.log(sorted[0].length);
//
// }

// Find the length of the shortest word in a sentence
// function findShort(s){
//
//   var words = s.split(" ");
//
//   var sorted = words.sort(function (a, b) {
//       return a.length - b.length;
//     });
//
//     // console.log(sorted[0].length);
//     console.log(sorted);
//
// }

// Give results below
// function accum(s) {
//   let letters = [];
//   let list = [];
//
//   function titleCase(string) {
//     return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
//   }
//
//   letters = s.split("");
//
//   for (i = 0; i < letters.length; i++) {
//       list.push(titleCase(letters[i].repeat(i + 1)));
//   }
//   console.log(list.join("-"));
// }

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

// Spin words of 5 letters or more
// function spinWords(phrase){
//   let spin = [];
//   let words = phrase.split(" ");
//
//     for (i = 0; i < words.length; i++) {
//         if (words[i].length >= 5) {
//           spin.push(words[i].split("").reverse().join(''));
//         } else {
//           spin.push(words[i]);
//         }
//     }
//     return(spin.join(' '));
// }
//
// spinWords("Hey fellow warriors");
// spinWords( "This is another test" );
