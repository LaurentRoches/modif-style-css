function AppliquerUnDelai(){
    setTimeout (function(){
        document.getElementById('para2').style.color = "blue";
        },1000);
    setTimeout (function(){
        document.getElementById('section2').style.border ="1px dotted black";
        },2000);
    setTimeout (function(){
        document.querySelector('#section2 .colorful').style.backgroundColor = "orange";
        },3000); 
    setTimeout (function(){
        document.querySelector('#section1 h2').style.fontStyle = "italic";
        },4000);
    setTimeout (function(){
        document.getElementById('para2').innerText = `modified by JS`;
        },5000);
    setTimeout (function(){
        document.querySelector('#section1 a').href="https://www.lilo.org/";
        },6000);
    setTimeout (function(){
        document.querySelector('#section2 h2').classList.add("big-text");
        },7000);
    setTimeout (function(){
        for (const element of document.getElementsByTagName('p')){
            element.style.fontStyle = "italic";
            }
        },8000);
    }
    AppliquerUnDelai();