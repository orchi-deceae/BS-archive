function bugor(){
    document.getElementById("sidebar").style.width = "250px";

    document.getElementById("curtain").style.opacity = "0.5";

    document.getElementById("curtain").style.zIndex = "12";

    document.getElementById("close").style.color = "black"

}

function closeh(){
    document.getElementById("sidebar").style.width = "0";

    document.getElementById("curtain").style.opacity = "0";

    document.getElementById("curtain").style.zIndex = "-1";

    document.getElementById("close").style.color = "white"
}

function answer(){
    document.getElementById("answer").style.textDecoration = "underline";
    document.getElementById("show").innerHTML = ""
    document.getElementById("hide").innerHTML = "[Hide]"
    document.getElementById("extra").innerHTML = "txt"
}

function hide(){
    document.getElementById("answer").style.textDecoration = "none";
    document.getElementById("show").innerHTML = "[Show]"
    document.getElementById("hide").innerHTML = ""
    document.getElementById("extra").innerHTML = ""
}
