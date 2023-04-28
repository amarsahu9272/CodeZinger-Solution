// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
// Input: s = "3[a2[c]]"
// Output: "acc acc acc"
function decodeString(s) {
  let stack = [];
  let curStr = "";
  let curNum = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") {
      stack.push(curStr);
      stack.push(curNum);
      curStr = "";
      curNum = 0;
    } else if (s[i] === "]") {
      let num = stack.pop();
      let prevStr = stack.pop();
      curStr = prevStr + curStr.repeat(num);
    } else if (s[i] >= "0" && s[i] <= "9") {
      curNum = curNum * 10 + Number(s[i]);
      //   console.log(curNum)
    } else {
      curStr += s[i];
    }
  }

  return curStr;
}
const s = "3[a2[c]]"
const s1 = "11[a2[c]]";
console.log(decodeString(s));
