// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

var backspaceCompare = function (s, t) {
  let res1 = "";
  let res2 = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] === "#" || s[i] === "#") {
      res1 += "";
    } else {
      res1 += s[i];
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i + 1] === "#" || t[i] === "#") {
      res2 += "";
    } else {
      res2 += t[i];
    }
  }
  console.log(res1, res2);
  return res1 == res2;
};
// console.log(backspaceCompare("xywrrmp", "xywrrmu#p"));
// console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
