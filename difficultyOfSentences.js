process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function isHard(word) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let consonants = 0;
  let consecutiveConsonants = 0;

  for (const c of word.toLowerCase()) {
    if (vowels.has(c)) {
      consecutiveConsonants = 0;
    } else {
      consonants++;
      consecutiveConsonants++;
      if (consecutiveConsonants === 4) {
        return true;
      }
    }
  }
  return consonants > word.length - consonants;
}

function solution(a) {
  //Write your solution here
  if (!a) {
    return 0;
  }
  const words = a.split(" ");
  let hardWords = 0;
  let easyWords = 0;
  for (const word of words) {
    if (isHard(word)) {
      hardWords++;
    } else {
      easyWords++;
    }
  }
  return 5 * hardWords + 3 * easyWords;
}

function main() {
  var a = readLine();

  var res = solution(a);
  console.log(res);
}
