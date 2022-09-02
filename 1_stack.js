class stack {
    constructor() {

    }
    push(value) {

    }
    pop() {

    }
  }

  // Test cases:
  const myStack = new stack
  myStack.push(3)
  myStack.push(6)
  myStack.push(9)
  console.log(myStack.pop()) // 9
  console.log(myStack.pop()) // 6
  console.log(myStack.pop()) // 3

// Using a JavaScript array, implement a stack.
// Hint: push/pop operations in a stack happen on the same side. Picture a stack of pancakes -- adding and removing of flapjacks always happens from the "top" of the stack. With an array, we can use visualize either the "left" or "right" side of the array as the "top" of the stack, so there are two ways to implement this.

// Useful array methods:
// push: add an element to the right side
// unshift: add an element to the left side
// pop: remove an element from the right side
// shift: remove an element from the left side
