// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

/* global $*/
// Document Ready Function. All of your jQuery should go in here. 
$(document).ready(function() {
  $("button").click(function() {
    var message = $("input").val();
    var translatedMessage = wordToPigLatin(message);
    $("#result").text(translatedMessage);
  });
});

// isVowel("f") -> false
// isVowel("a") -> true
// isVowel("e") -> true
function isVowel(character) {
  var lower = ["a", "e", "i", "o", "u"];

  for (var i = 0; i <= lower.length; i++) {
    var vowel = lower[i];
    if (character == vowel) {
      return true;
    }
  }
  return false;
}

  // Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 
  function wordToPigLatin(word) {
    if (isVowel(word[0])) {
      return word + "yay";
    }
    else {
      return word;
    }
  }
  

  // Create the sentenceToPigLatin function that takes a sentence as a parameter
  //Loops through all the words in the sentence and transforms each word
  //It should return a transfromed sentance
