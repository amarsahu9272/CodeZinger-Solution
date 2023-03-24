// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

function findAnagrams(s, p) {
  const result = [];
  const pCount = new Map();
  const windowCount = new Map();

  // Count the characters in p
  for (let i = 0; i < p.length; i++) {
    const char = p[i];
    pCount.set(char, (pCount.get(char) || 0) + 1);
  }

  // Slide the window over s and compare character counts
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    windowCount.set(char, (windowCount.get(char) || 0) + 1);

    // Remove the leftmost character from the window if it's outside the window size
    if (i >= p.length) {
      const leftChar = s[i - p.length];
      if (windowCount.get(leftChar) === 1) {
        windowCount.delete(leftChar);
      } else {
        windowCount.set(leftChar, windowCount.get(leftChar) - 1);
      }
    }

    // Compare the character counts between p and the current window
    if (i >= p.length - 1 && compareMaps(pCount, windowCount)) {
      result.push(i - p.length + 1);
    }
  }

  return result;
}

function compareMaps(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
}

console.log(findAnagrams("cbaebabacd", "abc"));
