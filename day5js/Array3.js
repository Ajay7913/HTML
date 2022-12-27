let list = ["delhi","calcutta","chennai","Nagpur","kanpur"];

// OLD GENRETIONAL APPROCH
 for(let i =0; i<list.lenght-1;i++){
    let item = list[i];
    console.log(item);
}

console.log("::::::::::::::::::::::::::::::::")

for (let city of list){
    console.log(city);
}

// () => {} // JS
// () -> {} // JAVA

console.log("::::::::::::::::::::::::::::::::");
list.forEach((item) => console.log(item));


