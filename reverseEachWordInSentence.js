function reverseString(str) {
  if (str.length === 0) return "";

  return reverseString(str.slice(1)) + str[0];
}

function reverseEachWordInSentence(str) {
  const arr = str.split(" ");
  for (i = 0; i < arr.length; i++) {
    arr[i] = reverseString(arr[i]);
  }
  return arr.join(" ");
}

console.log(reverseEachWordInSentence("yeht era gniyalp a emag"));
// console.log(reverseString("yeht era gniyalp a emag"));
