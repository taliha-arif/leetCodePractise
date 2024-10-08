// Javascript program for checking
// balanced brackets

// Function to check if brackets are balanced
function areBracketsBalanced(expr) {
  // Using ArrayDeque is faster
  // than using Stack class
  let stack = [];

  // Traversing the Expression
  for (let i = 0; i < expr.length; i++) {
    let x = expr[i];

    if (x == "(" || x == "[" || x == "{") {
      // Push the element in the stack
      stack.push(x);
      continue;
    }

    // If current character is not opening
    // bracket, then it must be closing.
    // So stack cannot be empty at this point.
    if (stack.length == 0) return false;

    let check = stack.pop();
    switch (x) {
      case ")":
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        if (check == "(" || check == "{") return false;
        break;
    }
  }

  // Check Empty Stack
  return stack.length == 0;
}

// Driver code
let expr = "([}])";

// Function call
if (areBracketsBalanced(expr)) console.log("Balanced ");
else console.log("Not Balanced ");
