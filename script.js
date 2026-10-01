
// animations

gsap.registerPlugin(ScrollTrigger);

gsap.to('#tagline-1',{
    x:-50,
    duration: 2
});

gsap.to('#tagline-2',{
    x:50,
    duration: 2
});

gsap.to('.landing-logo',{
    scrollTrigger: {
        trigger: '.pedal-showcase',
        start: 'top center+=10%',
        scrub: true,
        markers: true
    },
    scale: 2,
    opacity: 0

})

gsap.to('#tagline-1',{
    scrollTrigger: {
        trigger: '.pedal-showcase',
        scrub: true
    },
    opacity: 0,
    scale: 0.5
})

gsap.to('#tagline-2',{
    scrollTrigger: {
        trigger: '.pedal-showcase',
        scrub: true
    },
    opacity: 0,
    scale: 0.5
})


// flicker 

let destructive = document.getElementById('tagline-2');

function flicker() {
  destructive.style.opacity = Math.random() > 0.3 ? '1' : '0.75';
  setTimeout(flicker, Math.random() * 100 + 50);
}

flicker();


// pedal containers hover + animations

let pedalShowcaseContainers = document.getElementsByClassName('pedal-showcase-container');
let pedalShowcaseImgs = document.getElementsByClassName('pedal-showcase-img');


for (let i = 0; i < pedalShowcaseContainers.length; i++) {

    pedalShowcaseContainers[i].addEventListener('mouseenter', function(){   
    pedalShowcaseImgs[i].style.border = 'var(--borderWidth) solid var(--textHighlight)';
    })

    pedalShowcaseContainers[i].addEventListener('mouseleave', function(){   
    pedalShowcaseImgs[i].style.border = 'var(--borderWidth) solid black';
    })

    gsap.to(pedalShowcaseContainers[i],{
    scrollTrigger: {
        trigger: pedalShowcaseContainers[i],
        scrub: true
    },
    scale: 1,

})
}

// arrows hover

let arrows = document.getElementsByClassName('subnav-header-img');



// insta

let instaLogo = document.getElementById('insta-logo');

instaLogo.addEventListener('mouseenter', function(){
    instaLogo.src = 'instagram-active.svg';
})

instaLogo.addEventListener('mouseleave', function(){
    instaLogo.src = 'instagram.svg';
})