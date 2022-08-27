function isPalindrome(word) {
  // Write your algorithm here
  //iterate through the word to the middle
  for (let i = 0; i < word.length / 2; i++) {
    //compare the letters with the corresponding characters
    let j = word.length - i - 1;
    // if the letters are different, then return false
    if (word[i] !== word[j]) {
      return false;
    }
  }
  return true;
  }