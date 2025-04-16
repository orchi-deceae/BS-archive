
// sidebar
function bugor_(){
    document.getElementById("curtain").style.display = "flex";
    document.getElementById("sidebar").style.width = "300px";
}

function close_(){
    document.getElementById("imgbox_").style.display = "none"
    document.getElementById("curtain").style.display = "none";
    document.getElementById("sidebar").style.width = "0";
}

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

function fun(){
    document.getElementById("imgbox_").style.display = "block";
    document.getElementById("curtain").style.display = "flex";
    document.getElementById('imgbox_').innerHTML = _img;
}   let _img = 0;


// email
function sendMail(){
    let parms = {
        name : document.getElementById("name_").value,
        email : document.getElementById("email_").value,
        message : document.getElementById("message_").value,
    }

    emailjs.send("service_l8fwrai","template_6fh3qpj",parms).then(alert("Email Sent!!!"))
}


// comment
function contact_(){
    document.getElementById("contact_form_").style.display = "block";
    document.getElementById("comment_form_").style.display = "none";
    document.getElementById("h1_btn1_").style.textDecoration = "underline";
    document.getElementById("h1_btn2_").style.textDecoration = "none";
}
function comment_(){
    document.getElementById("contact_form_").style.display = "none";
    document.getElementById("comment_form_").style.display = "block";
    document.getElementById("h1_btn2_").style.textDecoration = "underline";
    document.getElementById("h1_btn1_").style.textDecoration = "none";

}

const form = document.getElementById('comment_form_');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('comment_form_').add({
        name: form.name.value,
        comment: form.comment.value
    });
    form.name.value = ''
    form.comment.value = ''
});
