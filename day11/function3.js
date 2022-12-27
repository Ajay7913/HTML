// FUNCTION CONCEPTS :: No Input Type Nor Output Type
function sum(n1,n2){
    // Checking Underdefined & Assign Default value
    n1 = n1 || 0;
    n2 = n2 || 0;
    let result = n1+n2 ;
    return result;
}

// FUNCTION OVERLOADING

let Output = sum();
let Output1 = sum(1);
let Output2 = sum(2,3);
let Output3 = sum (10,20,30);
console.log(Output,Output1,Output2,Output3);