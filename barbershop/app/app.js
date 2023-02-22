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
    if (currentBox.classList.contains('accordion__item-active')) {
        currentBox.classList.remove('accordion__item-active');
        return;
    }
    boxes.forEach(e => e.classList.remove('accordion__item-active'));
    currentBox.classList.toggle('accordion__item-active');
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