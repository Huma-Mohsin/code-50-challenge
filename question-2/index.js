//Question 149: Explain the concept of the event loop in JavaScript with an example.
// Explain & TIP: The event loop is a fundamental concept in JavaScript, enabling asynchronous operations. It monitors the call stack and the callback queue. If the call stack is empty, it moves the first event from the queue to the stack, ensuring non-blocking execution.
//solution:Asynchronous operations in JavaScript are tasks that don't necessarily execute immediately or in a predetermined sequence. Instead, they are executed at a later time, typically after some delay or in response to an event.
//The event loop is a crucial concept in JavaScript that enables asynchronous operations, ensuring non-blocking execution. It consists of the call stack and the callback queue. Here's a breakdown of how it works:
// 1- Call Stack: The call stack is a data structure that keeps track of function calls in the current execution context. When a function is called, it's added to the top of the stack. When a function returns, it's removed from the stack.
// 2- Callback Queue: The callback queue holds tasks (callbacks) that are ready to be executed. These tasks are typically asynchronous operations like setTimeout callbacks, DOM event handlers, or AJAX callbacks.
// 3- Event Loop: The event loop constantly checks the state of the call stack and the callback queue. If the call stack is empty and there are tasks in the callback queue, the event loop moves the first task from the queue to the call stack, where it's executed.
console.log("Your Time Is Start Now");
setTimeout(function (name) {
    console.log("Attempt Challenge 50");
}, 2000, "Student");
console.log("Your Time Ends Now");
//Author-Huma Mohsin
