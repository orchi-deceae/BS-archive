
// sidebar
function bugor_(){
    document.getElementById("curtain").style.display = "flex";
    document.getElementById("sidebar").style.width = "300px";
}

function close_(){
    document.getElementById("curtain").style.display = "none";
    document.getElementById("sidebar").style.width = "0";
}


//useless
function answer(){
    document.getElementById("hide").style.display = "flex"
    document.getElementById("show").style.display = "none"
    document.getElementById("answer").style.textDecoration = "underline";
}

function hide(){
    document.getElementById("show").style.display = "flex"
    document.getElementById("hide").style.display = "none"
    document.getElementById("answer").style.textDecoration = "none";
}


//image
let _img = 0;
function img(){
    document.getElementById('imgbox_').innerHTML = _img;
    document.getElementById("imgbox_").style.display = "block";
    document.getElementById("curtain_img").style.display = "flex";
}   
    
function close_img(){
    document.getElementById("imgbox_").style.display = "none";
    document.getElementById("curtain_img").style.display = "none";
}


// comment
function compose_(){
    document.getElementById("comment_box_").style.display = "flex"
    document.getElementById("curtain_comment_").style.display = "flex"
}
function close_comment_(){
    document.getElementById("comment_box_").style.display = "none";
    document.getElementById("curtain_comment_").style.display = "none";
}



