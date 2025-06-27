
// Side menu
function bugor_(){
    const sidebar = document.getElementById('sidebar').style
    sidebar.width = window.innerHeight >= 1200 ? '500px' : '300px'

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


// New project for Top page

document.querySelectorAll('.sidebar- div:not(:first-child)').forEach((value) => {
    let topics = value.querySelectorAll('a')
    topics.forEach((topic, i) => {
        if (topic.pathname === window.location.pathname){
            let title = topic.parentElement.parentElement.firstChild
            let past = topics[i - 1] ? topics[i-1] : topics[topics.length-1]
            let next = topics[i + 1] ? topics[i+1] : topics[0]

            add_Header(title, past, next, topic)
            return
        }
    });
});


function add_Header(title, past,next, now){
    if (document.querySelector('.header1-')) document.querySelector('.header1-').remove()
    if (document.querySelector('.header2-')) document.querySelector('.header2-').remove()
    if (document.querySelector('.title-')) document.querySelector('.title-').remove()
    console.log('hm')
    const head = `
    <div class="header1-">
        <a href="../../index.html"><div><img src="../../Pictures/BC-logo.jpg"></div></a>

        <a href="../../index.html"><button>Brainstormers <span> archieve</span></button></a>

        <div onclick="bugor_()" id="bugor_"><img src="../../Pictures/hamburger-menu.svg"></div>
    </div>

    <!--navigation bar-->
    <div class="header2-"></div>

    <!--Topic-->
    <div class="title-">
        <div class="sub-101-">${title.textContent}</div>

        <div class="change-">
            <div class="before-">
                <a href="${past.href}"><button class="before-btn-">Before</button></a>
                <div class="beforepop-">${past.textContent}</div>
            </div>
            <div class="after-">
                <a href="${next.href}"><button class="next-btn-">Next</button></a>
                <div class="afterpop-">${next.textContent}</div>
            </div>
        </div>

        <div class="topic-">${now.textContent}</div>
    </div>
    `
    document.body.innerHTML = head + document.body.innerHTML

    
    now.parentElement.querySelectorAll('a').forEach((value, i) => {
        document.querySelector('.header2-').innerHTML += `<a href="l${i+1}.html"><button><span>Lesson ${i+1}</span><span class="hidden-subject-">${value.textContent}</span></button></a>`
        if (value.pathname === window.location.pathname){
            document.querySelector('.header2- a:last-child button span').innerHTML = value.textContent
            document.querySelector('.header2- a:last-child button').classList.add('selected-')
        }
    });
}
// console.log('1231114'.replaceAll('1', ''))

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
        package === `   (${i}) ` ||
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

