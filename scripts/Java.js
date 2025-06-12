
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

function Word_Reader(){
    let letter = ['', '', '', '', '', '', '']
    document.querySelectorAll('.questions-').forEach((question) => {
        object1 = {
            new_HTML: '',
            case1_: 0, //Label was hit 
            case2_: 0  //it detects if there are option and;
            //if (yes=1&-1) it closes spans by alternating 1 and -1 (1 outside -1 inside).
            //if (no=0) it prints a textArea for the user to answer the theory
        }
        
        let content = question.innerHTML
        for (i of content){
            // Reads it left to right
            letter[0] = letter[1]
            letter[1] = letter[2]
            letter[2] = letter[3]
            letter[3] = letter[4]
            letter[4] = letter[5]
            letter[5] = letter[6]
            letter[6] = i

            object1.new_HTML += letter[0]
            question.innerHTML = innerNew_(letter) + letter[1] + letter[2] + letter[3] + letter[4] + letter[5] + letter[6]
        }
    });
    document.querySelectorAll('.optionjs--').forEach((value) => {
        value.addEventListener('click', () => {
            line(value)
        });
    });
    document.querySelectorAll('.inputjs--').forEach((value) => {
        value.addEventListener('input', () => {
            autoResize_(value)
        });
    });
}
// This puts the options into spans and creates the new innerHTML
function innerNew_(letters, package=''){
    let { new_HTML, case1_, case2_ } = object1

    for (i of letters) package += i.toLowerCase()

    if (!case1_) for (i of 'abcde'){
        if(
        package === `    ${i}) ` ||
        package === `    ${i}. ` ||
        (package === `    <p>`&&i==='a')||
        (package === ` <p cla`&&i==='a')||
        (package === `  <span`&&i==='a')
        ){
        new_HTML += `<span class="optionjs--">`
        case2_ = 1
        }
    }

    // closes span on tab
    if (package === '       '&&case2_>0){
        new_HTML += '</span>'
        case2_ = -1
    }
    
    //turns off system/adds textarea to theory
    if (package === ' <label'){
        if (!case2_) new_HTML += '<textarea rows="1" class="inputjs--" placeholder="Write here..."></textarea>';
        case1_++
    }
    
    object1 = { new_HTML, case1_, case2_ } // This makes it unforgotten
    return new_HTML
}

// Allows you to underline
function line(this_){
    autoLineRemover_(this_)
    if (this_.style.textDecoration !== 'underline'){
        this_.style.textDecoration = 'underline'
        this_.classList.add('underlinejs--')
    }
    else{
        this_.style.textDecoration = 'none'
        this_.classList.remove('underlinejs--')
    }
    console.log(this_.innerHTML)
}

//to remove the underline
function autoLineRemover_(this_){
    const parent = this_.closest('.questions-');
    if (!parent) return;

    const all = parent.querySelectorAll('.optionjs--');
        all.forEach(el => {
            if (el !== this_){
            el.style.textDecoration = 'none';
            el.classList.remove('underlinejs--');
        }
    });

}

//for the textArea
function autoResize_(this_){
    this_.style.height = 'auto'
    this_.style.height = this_.scrollHeight + 'px'
}


Word_Reader()

document.querySelectorAll('.questions- img').forEach((value) => {
    value.addEventListener('click', () => {
        img(value)
    });
});