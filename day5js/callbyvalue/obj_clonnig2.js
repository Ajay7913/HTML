let list1 =["pune","mumbai","nagpur"];
let list2 =[...list1];

let list3 = [...list1,"kolhapur"];
let list4 = ["kolhapur",...list1];


let list5 =[...list1,...list1];
console.log(list5.length);
console.log(list5);