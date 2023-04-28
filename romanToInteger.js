// // Input: s = "MCMXCIV"
// // Output: 1994
// // Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

function romanToInt(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "I":
        if (s[i + 1] === "V" || s[i + 1] === "X") {
          total -= 1;
        } else {
          total += 1;
        }
        break;
      case "V":
        total += 5;
        break;
      case "X":
        if (s[i + 1] === "L" || s[i + 1] === "C") {
          total -= 10;
        } else {
          total += 10;
        }
        break;
      case "L":
        total += 50;
        break;
      case "C":
        if (s[i + 1] === "D" || s[i + 1] === "M") {
          total -= 100;
        } else {
          total += 100;
        }
        break;
      case "D":
        total += 500;
        break;
      case "M":
        total += 1000;
        break;
      default:
        break;
    }
  }
  return total;
}
console.log(romanToInt("MCMXCIV"));
