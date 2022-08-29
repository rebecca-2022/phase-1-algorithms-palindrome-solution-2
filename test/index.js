function isPalindrome(word) {
  // Write your algorithm here
  //iterate from the begining to the middle
  for (let i = 0; i < word.length / 2; i++) {

    //check each letter to the corresponding letter from the end
    const j = word.length -1 -i
    const startChar = word[i]
    const endChar  = word[j]

    // if any letters don't match, return false
    if (startChar !== endChar) return false;

    //return true
    return true;

  }
  
  
  

}

/* 
  Add your pseudocode here
  That means if the 
  first letter is the same as the last letter, and the second letter is the same as the second last letter,etc.
  until we reach the middle,return true.
  iterate from the begining to the middle
     check each letter to the corresponding letter from the end
     if any letters don't match, return false
  return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;