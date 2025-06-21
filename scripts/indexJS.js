function seme_i_() {
    const termBox = document.querySelector('.terms-box-').style
    const curtain = document.createElement('div')
    curtain.classList.add('curtain-')

    document.body.appendChild(curtain)
    termBox.display = "block"

    curtain.addEventListener('click', () => {
        document.body.removeChild(curtain)
        termBox.display = "none"
    });

}
document.querySelectorAll('.main-txt- > span > span').forEach((value) => {
    value.addEventListener('click', () => seme_i_())
});


function term_Visiblity(term, i) {
    const termStyle = term.querySelector('div').style

    if (termStyle.backgroundColor !== 'white'){
        termStyle.backgroundColor = 'white'
        document.querySelector(`#part_${i}`).style.display = 'none'
    }
    else {
        termStyle.backgroundColor = 'rgb(0, 225, 255)'
        document.querySelector(`#part_${i}`).style.display = 'block'
    }
}
document.querySelectorAll('.terms-').forEach((term, i) => {
    term.addEventListener('click', () => {
        term_Visiblity(term, i+1)
    });
});



// email
function sendMail() {
    let parms = {
        name: document.getElementById("name_").value,
        email: document.getElementById("email_").value,
        message: document.getElementById("message_").value,
    }

    emailjs.send("service_l8fwrai", "template_6fh3qpj", parms).then(alert("Email Sent!!! -by EmailJS.com"))
}
