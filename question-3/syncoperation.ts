// //Question 150: Describe how asynchronous callbacks differ from synchronous code execution.

// Explain & TIP: Asynchronous callbacks allow JavaScript to perform long network requests, file operations, or set timers without blocking the main thread, enabling the continuation of code execution. Synchronous code, in contrast, runs sequentially, blocking further execution until the current operation completes.

// //solution
// Asynchronous callbacks and synchronous code execution represent two different approaches to handling tasks in JavaScript, particularly in scenarios involving time-consuming operations like network requests, file operations, or timers. Here's how they differ:

// Synchronous Code Execution:
// In synchronous code execution, tasks are executed sequentially, one after the other, in the order they appear in the code.
// Each operation must complete before the next one begins, meaning that the execution of subsequent code is blocked until the current operation finishes.
// Synchronous operations are straightforward and predictable but can lead to performance issues and unresponsiveness, especially when dealing with time-consuming tasks.

// Assuming Synchronous operation:-
console.log("synchronous operation starts here");

function display() {
  for (let i = 0; i < 1e12; i++) {
    //console.log("Hello Synchronous Operation")
    //commented this because it runs 1 trillion times first then it considers the next statement.

  }
}
display(); //calling function

console.log("synchronous operation ends here");//Author-Huma Mohsin



















