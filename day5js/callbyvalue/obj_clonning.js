let ref1 = {id:1,task:"React assignment 1"};

// DUPLICATE :: CLONE
let ref2 = {...ref1};

// update REf1
ref1.country="USA";

// update Ref2
ref2.venue ="Eng";


console.log(ref1);
console.log(ref2);