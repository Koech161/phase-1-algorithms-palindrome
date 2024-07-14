function isPalindrome(word) {
  // Write your algorithm here
let rev=word.split('').reverse().join('')
if (rev == word){
return true
}else{
  return false
}
/*for(let i = word.length - 1; i>=0; i--){
  rev += word[i]
}
if(rev==word){
  return true
} else{
  return false
}*/

};
/* 
  Add your pseudocode here
  using split(), reverse() and join
  also you can use for loop
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
