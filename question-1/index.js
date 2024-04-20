// //Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.
// Explain & TIP: setTimeout() is a built-in JavaScript function that allows you to execute a piece of code after a specified delay. It's especially useful for scheduling tasks, animations, or delaying execution without blocking the main thread.
//solution
//In JavaScript, setTimeout() is a function that executes a specified function or a specified piece of code once after a specified time interval.
function greet(name) {
    console.log("Hello Dear", name + "!");
}
// Syntax: setTimeout(function, milliseconds, arg1, arg2, ...)
setTimeout(greet, 2000, "Teachers");
setTimeout(greet, 3000, "Friends");
//or
setTimeout(function () {
    console.log("I Am Doing Task, Given In Challenge 50 Right Now.");
}, 4000);
//Author-Huma Mohsin
