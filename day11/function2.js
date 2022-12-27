// FUNCTION CONCEPT :: No Input Type Nor Output Type.
function sum(n1, n2) {
    // Checking Condition and Assign Default Value
  if (!n1){
    n1=0;
  }
if (!n2){
    n2=0;
}
let result = n1+n2;
return result;
}

// FUCTION OVERLOADING
let Output = sum();
let Output1 = sum(1);
let Output2 = sum(1,4);
let Output3 = sum(10,20,30);

console.log(Output,Output1,Output2,Output3);
