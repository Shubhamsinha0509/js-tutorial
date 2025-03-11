// Immediately Invoked Function Expressions (IIFE)

(function chai (){
    console.log(`DB CONNECTED`)
})();    // This semicolon is imp in this case to stop the context 

(function one(){
    console.log("HI THERE")
})();

(()=>{
    console.log("QWERTY")
})()