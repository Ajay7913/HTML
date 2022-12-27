function changeFontSize(p1){
    let perf = document.querySelector("p");

    if(p1 == "s") {
        perf.style.fontSize = "small";
    } else if (p1 ==   "m"){
        perf.style.fontSize = "medium";
    }else if (p1 == "l") {
        perf.style.fontSize = "large";
    }
}

function reset(){
    let pref = document.querySelector("p");
    pref.style.fontSize="medium";
}