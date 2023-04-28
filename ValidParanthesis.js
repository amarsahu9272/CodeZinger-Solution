// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Input: s = "()[]{}"
// Output: true

function isValid(s) {
  const stack = [];
  const mapping = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (mapping[char]) {
      stack.push(char);
    } else {
      const last = stack.pop();
      if (char !== mapping[last]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
