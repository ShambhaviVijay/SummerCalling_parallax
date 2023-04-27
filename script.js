let text= document.getElementById('text')
let cloud = document.getElementById('cloud')
let sun = document.getElementById('sun')
let boat = document.getElementById('boat')
let wave3 = document.getElementById('wave3')
let wavex = document.getElementById('wavex')
let wavey = document.getElementById('wavey')
let section = document.querySelector('.section');


    window.addEventListener('scroll',()=>{
        let value = window.scrollY;
        sun.style.marginTop = value * -3.5 + 'px';
        cloud.style.marginTop = value * -1.8 + 'px';
        boat.style.left = value * 1.5 + 'px';

        let sectionHeight = section.offsetHeight; // get the height of the section
        let textPosition = sectionHeight - value * 10;// calculate the position of the text
        text.style.marginTop = value * 2.5 + 'px';
        text.style.opacity = textPosition <= 0 ? 0 : 1; 
    })
