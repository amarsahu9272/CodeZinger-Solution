// function longestBeautifulSubstring(word) {
//     const matches = word.matchAll(/a+e+i+o+u+/g);
//     let maxLength = 0;

//     for (const match of matches) {
//     console.log(match)
//       maxLength = Math.max(maxLength, match[0].length);
//     }

//     return maxLength;
//   }

function longestBeautifulSubstring(word) {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let counts = new Map();
  let vowels = ["a", "e", "i", "o", "u"];
  let lastVowel = "a";

  while (right < word.length) {
    // Update vowel count and last vowel
    if (vowels.includes(word[right])) {
      counts.set(word[right], (counts.get(word[right]) || 0) + 1);
      lastVowel = word[right];
    }

    // Check if substring is beautiful
    if (
      counts.has("a") &&
      counts.has("e") &&
      counts.has("i") &&
      counts.has("o") &&
      counts.has("u") &&
      lastVowel === "u"
    ) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    // Move right pointer to next character
    right++;

    // Reset counts and last vowel if current character is not a vowel or not in alphabetical order
    if (!vowels.includes(word[right]) || word[right] < lastVowel) {
      counts.clear();
      lastVowel = "a";
      left = right;
    }
  }

  return maxLen;
}

console.log(longestBeautifulSubstring("aeiaaioaaaaeiiiiouuuooaauuaeiu"));
