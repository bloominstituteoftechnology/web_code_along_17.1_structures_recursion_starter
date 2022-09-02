class queue {
    constructor() {

    }
    enqueue(value) {

    }
    dequeue() {

    }
  }

  // Test cases:
  const myQueue = new queue
  myQueue.enqueue(3)
  myQueue.enqueue(6)
  myQueue.enqueue(9)
  console.log(myQueue.dequeue()) // 3
  console.log(myQueue.dequeue()) // 6
  console.log(myQueue.dequeue()) // 9

// Using a JavaScript array, implement a queue.
// Hint: enqueue/dequeue operations in a queue happen on the opposite sides. Picture standing in a line -- you start at the back of the line, and leave the line once you reach the front! Using an array, you can choose your own mapping of left/right to the front/back of the line. Either way (left -> front, right -> back or vice versa) works!

// Useful array methods:
// push: add an element to the right side
// unshift: add an element to the left side
// pop: remove an element from the right side
// shift: remove an element from the left side
