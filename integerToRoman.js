
// function decimalToRoman(num) {
//   const romanNumeralLookup = {
//     1000: "M",
//     900: "CM",
//     500: "D",
//     400: "CD",
//     100: "C",
//     90: "XC",
//     50: "L",
//     40: "XL",
//     10: "X",
//     9: "IX",
//     5: "V",
//     4: "IV",
//     1: "I",
//   };

//   let romanNumeral = "";

//   for (let key in romanNumeralLookup) {
//     // const k = parseInt(key);
//     // console.log(typeof k);
//     while (num >= key) {
//       romanNumeral += romanNumeralLookup[key];
//       const k = parseInt(key);
//       num -= parseInt(k);
//     }
//   }

//   return romanNumeral;
// }

var intToRoman = function (num) {
    const romanNumeralSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const romanNumeralValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumeral = "";

    for (let i = 0; i < romanNumeralValues.length; i++) {
        while (num >= romanNumeralValues[i]) {
            romanNumeral += romanNumeralSymbols[i];
            num -= romanNumeralValues[i];
        }
    }

    return romanNumeral;
};

// Example usage
console.log(decimalToRoman(2023)); // Outputs "MMXXIII"
