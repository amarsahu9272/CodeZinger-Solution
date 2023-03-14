function sortArray(str) {
  const arr = str.split(" ");
  const freq = new Map();
  for (const word of arr) {
    freq.set(word, (freq.get(word) || 0) + 1);
  }
  for (const word of arr) {
    console.log(`${word}:${freq.get(word)}`);
  }
}

console.log(
  sortArray(
    "success is not the key of Happiness Happiness is the key of success"
  )
);
