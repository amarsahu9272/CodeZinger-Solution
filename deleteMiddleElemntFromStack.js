function deleteMiddle(stack, middle) {
  // If the stack is empty, return
  if (stack.length == 0) {
    return;
  }

  // If the middle element is reached, pop it
  if (middle == 1) {
    stack.pop();
    return;
  }

  // Remove the middle element from the remaining stack
  let temp = stack.pop();
  deleteMiddle(stack, middle - 1);
  stack.push(temp);
}

function deleteMiddleElement(stack) {
  // If the stack is empty, return
  if (stack.length == 0) {
    return;
  }

  // Calculate the middle element
  let middle = Math.ceil((stack.length + 1) / 2);

  // Delete the middle element
  deleteMiddle(stack, middle);
}

// Example usage
let stack = [1, 2, 3, 4, 5];
deleteMiddleElement(stack);
console.log(stack); // Output: [1, 2, 4, 5]
