
// Side menu
function bugor_(){
    document.getElementById('sidebar').style.width = '300px'

    const curtain = document.createElement('div')
    document.body.appendChild(curtain)
    
    curtain.addEventListener('click', () => close_());
    curtain.classList.add('curtain-')
}

function close_(){
    document.body.removeChild(document.querySelector(".curtain-"))
    document.getElementById("sidebar").style.width = "";
}



//image
function img(this_){
    const imgbox_ = document.createElement('div')
    const curtain = document.createElement('div')
    
    imgbox_.classList.add('imgbox-')
    curtain.classList.add('curtain-')

    document.body.appendChild(imgbox_)
    document.body.appendChild(curtain)
    
    imgbox_.innerHTML = this_.outerHTML

    curtain.addEventListener('click', () => {
        document.body.removeChild(imgbox_)
        document.body.removeChild(curtain)
    });
}   

// I made it smart
console.log('hi')

function Word_Reader(){
    let letters = ['', '', '', '', '', '', '']
    document.querySelectorAll('.questions-').forEach((question) => {
        object1 = {
            newHTML: '',
            package: '',
            optionParam_: 0  //it detects if there are option and;
            //if (yes=1&-1) it closes spans by alternating 1 and -1 (1 outside -1 inside).
            //if (no=0) it prints a textArea for the user to answer the theory
        }
        
        for (i of question.innerHTML){
            // Reads it left to right
            letters.splice(0, 1) //removes the bottom [0], gravity pulls the array down (0<=1, 1<=2... 5<=6) downward
            letters.push(i) //adds to the top [6]

            elementCreator(letters)
            object1.newHTML += letters[0] //pushes the last letter
        }
        question.innerHTML = object1.newHTML + letters.slice(1).join('')
    });


    document.querySelectorAll('.optionjs--').forEach((value) => {
        value.addEventListener('click', () => {
            lineCreator(value)
        });
    });
    document.querySelectorAll('.inputjs--').forEach((value) => {
        value.addEventListener('input', () => {
            autoResize_(value)
        });
    });
    document.querySelectorAll('.questions- img').forEach((value) => {
        value.addEventListener('click', () => {
            img(value)
        });
    });
}
// This puts the options into spans and creates the new innerHTML
function elementCreator(letters){
    let { newHTML, package, optionParam_ } = object1
    if (package === ' <label') return

    package = letters.join('').toLowerCase()

    for (i of 'abcde'){
        if(
        package === `    ${i}) ` ||
        package === `    ${i}. ` ||
        package === `    <p>`||
        package === `  <p cl`||
        package === `  <span`
        ){
        newHTML += `<span class="optionjs--">`
        optionParam_ = 1
        break
        }
    }

    // closes span on tab
    if (package === '       '&&optionParam_>0){
        newHTML += '</span>'
        optionParam_ = -1
    }
    
    // turns off system/adds textarea to theory
    if (package === ' <label' && !optionParam_){
        newHTML += '<textarea rows="1" class="inputjs--" placeholder="Write here..."></textarea>';
    }
    
    object1 = { newHTML, package, optionParam_ } // This makes it unforgotten
}

// Allows you to underline
function lineCreator(this_){
    autoLineRemover_(this_)
    if (this_.style.textDecoration !== 'underline'){
        this_.style.textDecoration = 'underline'
        this_.classList.add('underlinejs--')
    }
    else{
        this_.style.textDecoration = 'none'
        this_.classList.remove('underlinejs--')
    }
    console.log(this_)
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


function use1(){
    const array = document.querySelectorAll('.header2- a')
    const arrayL = array.length
    let back;
    let next;
    array.forEach((value, i) => {
        value.querySelector('button span').innerHTML = `Lesson ${i+1}`
        if (value.href === window.location.href){
            value.querySelector('button').classList.add('selected-')
            back = array[i-1] ? array[i-1] : array[arrayL - 1];
            next = array[i+1] ? array[i+1] : array[0];
            console.log(next, back)
            
            value.querySelector('button span').innerHTML = 
            value.querySelector('button .hidden-subject-').innerHTML
        }
    });
    document.querySelector('.before- div').innerHTML = back.querySelector('button .hidden-subject-').innerHTML
    document.querySelector('.before- a').href = back.href
    
    document.querySelector('.after- div').innerHTML = next.querySelector('button .hidden-subject-').innerHTML
    document.querySelector('.after- a').href = next.href
}
use1()