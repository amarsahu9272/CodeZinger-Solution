/**
 * @param {string} s
 * @return {string}
 */
function frequencySort(s) {
  // Create a map to store the frequency of each character
  const frequencyMap = new Map();
  for (const char of s) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  // Sort the characters in descending order based on frequency
  const sortedChars = [...frequencyMap.keys()].sort(
    (a, b) => frequencyMap.get(b) - frequencyMap.get(a)
  );

  // Construct the sorted string
  let sortedString = "";
  for (const char of sortedChars) {
    sortedString += char.repeat(frequencyMap.get(char));
  }

  return sortedString;
}
