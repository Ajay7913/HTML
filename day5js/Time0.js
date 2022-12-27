let list =[
{message :"hi",messageTime:new Date() },
{message:"Hello",messageTime:new Date},
{message:"GM",messageTime:new Date()},
{message:"GE",messageTime:new Date()},
{message:"GN",messageTime:new Date()},
{message:"ABCD",messageTime:new Date()}
];

for(i=0;i<list.length;i++){
    let item= list[i];
    // console.log(item)
    let hours = item.messageTime.getHours();
    let minutes = item.messageTime.getMinutes();

    console.log(`${item.message}${hours}:${minutes}`);
}
for (let item of list){
    // Accessing the member of object :item
    console.log(item.message);
}
// COLLECTION + ARROW
list.forEach((item)=> console.log(item.message));