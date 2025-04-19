function seme_i_(){
    document.getElementById('seme_box_').style.display = "block"
    document.getElementById('curtain_').style.display = "flex"
}
function close_(){
    document.getElementById('seme_box_').style.display = "none"
    document.getElementById('curtain_').style.display = "none"
}
function dot_1(){
    document.getElementById('part_1').style.display = "none"
    document.getElementById('first_100').style.display = "none"
    document.getElementById('first_100_off').style.display = "flex"
}
function dot_1_off(){
    document.getElementById('part_1').style.display = "block"
    document.getElementById('first_100').style.display = "flex"
    document.getElementById('first_100_off').style.display = "none"
}
function dot_2(){
    document.getElementById('part_2').style.display = "none"
    document.getElementById('second_100').style.display = "none"
    document.getElementById('second_100_off').style.display = "flex"
}
function dot_2_off(){
    document.getElementById('part_2').style.display = "block"
    document.getElementById('second_100').style.display = "flex"
    document.getElementById('second_100_off').style.display = "none"
}


// email
function sendMail(){
    let parms = {
        name : document.getElementById("name_").value,
        email : document.getElementById("email_").value,
        message : document.getElementById("message_").value,
    }

    emailjs.send("service_l8fwrai","template_6fh3qpj",parms).then(alert("Email Sent!!!"))
}
