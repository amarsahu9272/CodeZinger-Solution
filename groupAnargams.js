// Given an array of strings strs, group the anagrams together. 
// You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a 
// different word or phrase, typically using all the original letters
// exactly once.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(strs) {
  const map = new Map();

  for (let word of strs) {
    // Sort the characters in the string and use it as a key in the map
    const sorted = word.split("").sort().join("");

    if (map.has(sorted)) {
      // Add the string to the array of anagrams for this key
      map.get(sorted).push(word);
    } else {
      // Create a new array for this key and add the string to it
      map.set(sorted, [word]);
    }
    // console.log(map);
  }
  // Return an array of arrays containing the anagrams
    // return Array.from(map.values());
  return [...map.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams([""]));
