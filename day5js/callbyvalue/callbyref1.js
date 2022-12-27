function updateUser(p1) {
    p1.country ="india";
}

function main (){
    let user = {id: 1 , name: "Ajay" };

    // CALL BY REF
    updateUser(user);
    console.log(user);
}
main();