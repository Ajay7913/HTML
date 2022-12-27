// OUR Requirement - Message App
// let msg1 = "hi"

let msg1 ={msg:"hi",ts:"20222-12-14"};
let msg2 ={msg2:"hello",ts:"2022-12-14"}

// TIMESTAMP -Inbuilt class

let ts = new Date();
console.log(ts);

// Member function to get Specific Details
let hour = ts.getHours();
let minutes = ts.getMinutes();
let second = ts.getSeconds();

console.log(`${hour}:${minutes}:${second}`);
