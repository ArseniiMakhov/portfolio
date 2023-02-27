// SLIDER

let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
    item.getElementsByClassName.minWidth = `${itemWidth}px`
})

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
})

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
})

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    btnPrev.disabled = position === 0;
}

checkBtns();



// ACCORDION

const boxes = Array.from(document.querySelectorAll('.accordion__item'));

boxes.forEach((box) => {
    box.addEventListener('click', boxHandler);
});

function boxHandler(e) {
    e.preventDefault;
    let currentBox = e.target.closest('.accordion__item');
    let content = currentBox.querySelector('.price__categories');

    if (currentBox.classList.contains('accordion__item-active')) {
        currentBox.classList.remove('accordion__item-active');
        content.style.height = null;
        return;
    }
    boxes.forEach((e) => {
        e.classList.remove('accordion__item-active')
        let otherContent = e.querySelector('.price__categories');
        otherContent.style.height = null;
    });
    currentBox.classList.toggle('accordion__item-active');
    content.style.height = `${content.scrollHeight}px`;
}




//GALLERY 

function slidePlugin(activeSlide) {
    const slides = document.querySelectorAll('.gallery__slide');

    slides[activeSlide].classList.add('active');

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses();
            slide.classList.add('active');
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })
    }
}

slidePlugin(5);

// FIXED HEADER

let header = document.querySelector('.header');
let headerH = document.querySelector('.header').clientHeight;

document.onscroll = () => {
    let scroll = window.scrollY;

    if (scroll > headerH) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
}

// SMOOTH SCROLL 

let anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

// INTRO BACKGROUND 

let bg = document.querySelector('.intro__background');

onload = function () {
    let grounds = ['images/intro-back2.jpg',
        'images/intro-back.jpg'];
    let t = 30;

    setInterval(function () {
        let p = grounds.shift();
        bg.style.backgroundImage = 'url(' + p + ')';
        grounds.push(p);
    }, t * 1000);
}


// MOBILE NAVIGATION

let btn = document.querySelector('.nav__btn');
let nav = document.querySelector('.header__nav');

btn.addEventListener('click', opener);

function opener() {
    if (btn.classList.contains('nav__btn-active') && nav.classList.contains('header__nav-active')) {
        btn.classList.remove('nav__btn-active');
        nav.classList.remove('header__nav-active');
    } else {
        btn.classList.add('nav__btn-active');
        nav.classList.add('header__nav-active');
    }
}