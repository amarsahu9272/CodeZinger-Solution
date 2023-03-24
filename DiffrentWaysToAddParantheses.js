// Given a string expression of numbers and operators,
// return all possible results from computing all the different possible ways to group
// numbers and operators. You may return the answer in any order.

// The test cases are generated such that the output values fit
// in a 32-bit integer and the number of different results does not exceed 104.

// Input: expression = "2-1-1"
// Output: [0,2]
// Explanation:
// ((2-1)-1) = 0
// (2-(1-1)) = 2
function diffWaysToCompute(expression) {
  const result = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression.charAt(i);

    if (char === "+" || char === "-" || char === "*") {
      const leftResults = diffWaysToCompute(expression.slice(0, i));
      const rightResults = diffWaysToCompute(expression.slice(i + 1));

      for (let j = 0; j < leftResults.length; j++) {
        for (let k = 0; k < rightResults.length; k++) {
          switch (char) {
            case "+":
              result.push(leftResults[j] + rightResults[k]);
              break;
            case "-":
              result.push(leftResults[j] - rightResults[k]);
              break;
            case "*":
              result.push(leftResults[j] * rightResults[k]);
              break;
          }
        }
      }
    }
  }

  if (result.length === 0) {
    result.push(parseInt(expression));
  }

  return result;
}
