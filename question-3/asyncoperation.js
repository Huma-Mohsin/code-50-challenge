//consider async operation :- //donot wait for delay, go ahead towards other execution.
console.log("asynchronous operation Starts");
setTimeout(function displayData() {
    for (var i = 0; i < 10; i++) {
        console.log("consider How Asynchronous Operation Works");
    }
}, 3000);
console.log("asynchronous operation Ends"); //Author-Huma Mohsin
