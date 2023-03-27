//151. Reverse Words in a String
// Input: s = "the sky is blue"
// Output: "blue is sky the"

function reverseWords(s) {
  // Trim leading and trailing spaces
  s = s.trim();

  // Split the string by spaces
  let words = s.split(/\s+/);

  // Reverse the order of the words
  words.reverse();

  // Join the words with a single space
  return words.join(" ");
}

// function reverseString(arr) {
//     const result = []
//     if (arr.length === 0) return "";
//     result.push(arr[0])
//     return (reverseString(arr.slice(1))).concat(result);
// }
// var reverseWords = function (str) {
//     const arr = str.split(" ");
//     return reverseString(arr).join(" ");
// };
console.log(reverseWords("the sky is blue"));
