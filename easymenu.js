let navBtn = document.getElementById('nav-btn-m');
let navItems = document.getElementById('nav-item-container');
let navItemNames = document.getElementsByClassName('nav-item-name');
let subNavHeaders = document.getElementsByClassName('subnav-header');
let subNavMenus = document.getElementsByClassName('subnav-menu');
let subNavHeaderImgs = document.getElementsByClassName('subnav-header-img');
let main = document.getElementById('main');

navBtn.addEventListener('click', openSideNav);

function openSideNav(){
    navItems.classList.toggle('side-nav-open');
    navBtn.classList.toggle('nav-btn-swap');
    main.classList.toggle('main-push');
}


for (let i = 0; i < subNavHeaders.length; i++) {
    subNavHeaders[i].addEventListener('click', function(){

        for(let j = 0; j <subNavHeaders.length; j++) {
            if (j != i) {
                subNavMenus[j].classList.remove('subnav-open', 'subnav-open-m');
                subNavHeaderImgs[j].classList.remove('chevron-180');
            }
        }

        subNavHeaderImgs[i].classList.toggle('chevron-180');
        subNavMenus[i].classList.toggle('subnav-open'); 
        subNavMenus[i].classList.toggle('subnav-open-m');
    })
}

for (let i = 0; i < navItemNames.length; i++) {
    navItemNames[i].addEventListener('mouseenter', function(){
        subNavHeaderImgs[i].src = 'down arrow active.svg';
        
    })  
    navItemNames[i].addEventListener('mouseleave', function(){
        subNavHeaderImgs[i].src = 'down arrow.svg';
        
    })  
}

window.addEventListener('click', function(event) {
    if (!event.target.closest('.subnav-header') &&
        !event.target.closest('.subnav-menu')) {

        for (let i = 0; i < subNavMenus.length; i++) {
            if (subNavMenus[i]) subNavMenus[i].classList.remove('subnav-open', 'subnav-open-m');
            if (subNavHeaderImgs[i]) subNavHeaderImgs[i].classList.remove('chevron-180');

        }
    }

    

});