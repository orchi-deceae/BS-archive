function bugor_(){
    document.getElementById("curtain").style.display = "flex";
    document.getElementById("sidebar").style.width = "250px";
}

function close_(){
    document.getElementById("curtain").style.display = "none";
    document.getElementById("sidebar").style.width = "0";
}

function answer(){
    document.getElementById("show").style.display = "none"
    document.getElementById("hide").style.display = "flex"
    document.getElementById("answer").style.textDecoration = "underline";
}

function hide(){
    document.getElementById("show").style.display = "flex"
    document.getElementById("hide").style.display = "none"
    document.getElementById("answer").style.textDecoration = "none";
}
