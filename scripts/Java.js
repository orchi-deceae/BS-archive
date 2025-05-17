
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
function img(this_){
    document.getElementById('imgbox_').innerHTML = `<img>`
    document.querySelector('#imgbox_ img').src = this_.src
    document.getElementById('imgbox_').style.display = "block";
    document.getElementById("curtain_img").style.display = "flex";
}   
    
function close_img(){
    document.getElementById("imgbox_").style.display = "none";
    document.getElementById("curtain_img").style.display = "none";
}




// package Scanner (it's 1 question)
console.log('hi')
function Word_Reader(x){
    let n_ = ['', '', '', '', '', '', '']
    for (i of x.innerHTML){
        // Reads it left to right
        n_[6] = n_[5]
        n_[5] = n_[4]
        n_[4] = n_[3]
        n_[3] = n_[2]
        n_[2] = n_[1]
        n_[1] = n_[0]
        n_[0] = i
        
        x.innerHTML = innerNew_(n_[6], n_[5], n_[4], n_[3], n_[2], n_[1], n_[0]) + n_[5] + n_[4] + n_[3] + n_[2] + n_[1] + n_[0]
    }
}
// This puts the options into spans and creates the new innerHTML
function innerNew_(x1, x2, x3, x4, x5, x6, x7){
    let x = (x1 + x2 + x3 + x4 + x5 + x6 + x7).toLowerCase()
    let y = (x1 + x2 + x3 + x4).toLowerCase()
    if (x === ' <label'){
        it++
    }//? turns off system when <label> is hit
    if (x === '       '&&!it){
        is++; x_+='</span>'
    }//? closes span on tab
    if (!in_&&x === ' <label'){
        x_ += '<textarea rows="1" class="inputjs--"></textarea>';
    }//? creates a textbox if there are no options

    if (is && !it) for (i of 'abcde'){
    // first: does not give display block
        if
        (x=== `<br>${i}. ` ||
        x === `<br>${i}) ` ||
        x === ` <br>${i} ` ||
        (x === `    <p>`&&i==='a')||
        (x === ` <p cla`&&i==='a')){
        x_+=`<span class="T--" onclick="line(this)">`
        is=0;in_++
        }
    // second: gives display block
        if
        (x=== `    ${i}) ` ||
        x === `    ${i}. ` ||
        x === `     ${i} ` ||
        (x === `  <span`&&i==='a')){
        x_+=`<span class="T--" style="display: block;" onclick="line(this)">`
        is=0;in_++
        }
    }
    x_ += x1
    return x_
}

// Allows you to underline
function line(this_){
    under(this_)
    console.log(this_.innerHTML)
    if (this_.style.textDecoration !== 'underline'){
        this_.style.textDecoration = 'underline'
        this_.classList.add('underlinejs--')
    }
    else{
        this_.style.textDecoration = 'none'
        this_.classList.remove('underlinejs--')
    }
}

// Auto un-underliner
function under(this_){
    for(let i=0; i < 100; i++){
        let n = document.querySelector(`.questions-:nth-child(${i})`)
        if (n){ 
            for(let i_=0; i_ < 100; i_++){
                let x = document.querySelector(`.questions-:nth-child(${i}) .T--:nth-child(${i_})`) // class T-- is innerNew()
                if (x === this_){
                    for(let i__=0; i__ < 100; i__++){
                        let l_ = document.querySelector(`.questions-:nth-child(${i}) .T--:nth-child(${i__})`)
                        if(l_ && l_ !== this_){
                            l_.style.textDecoration = 'none'
                            l_.classList.remove('underlinejs--')
                        }
                    }
                }
            }
        }
    }
}
let x_ = ''
let it = 0
let is = 0
let in_= 0
// Scans the doc for Questions
if (true) for (let i = 0; i < 100; i++){
    let x = document.querySelector(`.questions-:nth-child(${i})`)
    if (x){
        console.log(i)
        // console.log(document.querySelector(`.questions-:nth-child(${i})`).innerHTML)

        // console.log(document.querySelector(`.questions-:nth-child(${i}) div`).innerHTML)
        Word_Reader(x) //! Sends package (it's 1 question)
        // console.log(document.querySelector(`.questions-:nth-child(${i}) div`).innerHTML)
        
        // console.log(document.querySelector(`.questions-:nth-child(${i})`).innerHTML)
        x_ = ''
        in_=0
        it = 0
    }
}


