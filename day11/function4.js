// FUNCTION CONCEPT :: No input Type Nor Output Type
// Function parameter with Default value
function sum(n1,n2){
    let result=n1+n2;
    return result;
}

// Function Overloading
let Output =sum ();
let Output1= sum(1);
let Output2 = sum(2,5);
let Output3 = sum (10,20,30);

console.log(Output,Output1,Output2,Output3);