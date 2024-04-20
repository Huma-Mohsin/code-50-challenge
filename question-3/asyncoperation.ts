//consider async operation :- //donot wait for delay, go ahead towards other execution.

console.log("asynchronous operation Starts");

setTimeout(function displayData(){//set a side b/c of delay and go to execute next statement w/o any delay.
    for(let i=0; i<10;i++){
    console.log("consider How Asynchronous Operation Works");
    }

    
},3000);

console.log("asynchronous operation Ends");  //Author-Huma Mohsin
