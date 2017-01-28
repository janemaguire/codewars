function findShort(s){

// Split string into array of strings
var words = s.split(" ");
console.log(words);

// for each string in array find length
  for (i = 0; i < words.length; i++) {
    return (words[i].length);
  }

}

findShort("Hello everyone");
