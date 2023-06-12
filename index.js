/*--Scroll for more--*/

const goArrow = document.querySelector('#scrol')
goArrow.onclick = function(e) {
    e.preventDefault()
    scrollTo(0, 470)    
}


/*--Slides-left--*/

const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slides-left .slider__img");
const sliderLine = document.querySelector(".slides-left .slider__line");

const sliderNext = document.querySelector(".button__slider-next-1");
const sliderPrev = document.querySelector(".button__slider-prev-1");

let count = 0;
let width;

sliderNext.addEventListener("click", nextSlider);
sliderPrev.addEventListener("click", prevSlider);

function init() {
width = document.querySelector(".slider").offsetWidth;
sliderLine.style.width = width * images.length + "px";
/* все изображения делаем равными ширине слайдера */
images.forEach((item) => {
item.style.width = width + "px";
item.style.height = "auto"; /* при изменении ширины высота автоматом */
});
rollSlider();
}

window.addEventListener("resize", init);
init();

function nextSlider() {
count++;
if (count >= images.length) {
count = 0;
}
rollSlider();
}

function prevSlider() {
count--;
if (count < 0) {
count = images.length - 1;
}
rollSlider();
}

function rollSlider() {
sliderLine.style.transform = `translateX(${-count * width}px)`;
}

setInterval(() => {
nextSlider();
}, 5000);


/*--Slides-right--*/

const $sr = document.querySelector("#sr");

const images2 = document.querySelectorAll(".slides-right .slider__img");

const sliderLine2 = document.querySelector(".slides-right .slider__line");

$sr.insertAdjacentHTML(
"beforeend",
'<button class="button__slider-next-2"><img src="./image/header-bottom/Arrow-right.png" alt="next2"></button>'
);
$sr.insertAdjacentHTML(
"beforeend",
'<button class="button__slider-prev-2"><img src="./image/header-bottom/Arrow-left.svg" alt="prev2"></button>'
);

const sliderNext2 = $sr.querySelector(".button__slider-next-2");
const sliderPrev2 = $sr.querySelector(".button__slider-prev-2");

let count2 = 0;

sliderNext2.addEventListener("click", nextSlider2);
sliderPrev2.addEventListener("click", prevSlider2);

function init2() {
// console.log("resize");
width = document.querySelector("#sr").offsetWidth;
sliderLine2.style.width = width * images2.length + "px";
/* все изображения делаем равными ширине слайдера */
images2.forEach((item) => {
item.style.width = width + "px";
item.style.height = "auto"; /* при изменении ширины высота автоматом */
});
rollSlider2();
}

window.addEventListener("resize", init2);
init2();

function nextSlider2() {
count2++;
if (count2 >= images2.length) {
count2 = 0;
}
rollSlider2();
}

function prevSlider2() {
count2--;
if (count2 < 0) {
count2 = images2.length - 1;
}
rollSlider2();
}

function rollSlider2() {
sliderLine2.style.transform = `translateX(${-count2 * width}px)`;
}

setInterval(() => {
nextSlider2();
}, 5000);



/*--Animation scroll--*/

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top    
    
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
checkBoxes()


/*--Anchor--*/

const anchor = document.querySelector('a.scroll-to')
anchor.addEventListener('click', function(e) {
    e.preventDefault()

    const blockId = anchor.getAttribute('href')

    document.querySelector(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})


/*-- FOOTER --*/

const foot = document.createElement('div')
foot.classList.add('footer')
document.body.append(foot) 
document.body.appendChild(foot)


const footerContainer = document.createElement('div')
footerContainer.classList.add('footer__container')
foot.appendChild(footerContainer)

const footerRow = document.createElement('div')
footerRow.classList.add('footer__row') 
footerContainer.appendChild(footerRow)

const footerLogo = document.createElement('div')
footerLogo.classList.add('footer__logo')

const img = document.createElement('img')
img.src = "./image/header-top/лого юник 1.svg"
img.alt = "Foto"
footerLogo.append(img)

const footerAddress = document.createElement('div')
footerAddress.classList.add('footer__address')
footerAddress.innerHTML = '<h3>Quinn Property Management</h3> <p>20200 W Dixie HWY, 909B Aventura, FL 33180</p>'
footerAddress.children[0].classList.add('address-content')

const footerContacts = document.createElement('div')
footerContacts.classList.add('footer__contacts')
footerContacts.innerHTML = '<p>+1 (305) 778-8325</p> <p>hi@quinnpm.com</p>'
footerContacts.children[0].classList.add('phone')
footerContacts.children[1].classList.add('mail')

const footerCopyright = document.createElement('div')
footerCopyright.classList.add('footer__copyright')
footerCopyright.innerHTML = '<p>© 2023 Copyright Quinn Property Management</p>'

footerRow.append(footerLogo, footerAddress, footerContacts, footerCopyright)

