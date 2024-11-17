const main = document.querySelector('main')
const image = document.querySelector('.images')
const front = document.querySelector('.front')
const back = document.querySelector('.back')
const card3D = document.querySelector('.card3D')
const numberInp = document.querySelector('.card-number-input')
const cardNum = document.querySelector('.card-number')
const holderInp = document.querySelector('.card-holder-input')
const holderName = document.querySelector('.card-holder-name')
const monthInp = document.querySelector('.month-input')
const expMonth = document.querySelector('.exp-month')
const yearInp = document.querySelector('.year-input')
const expYear = document.querySelector('.exp-year')
const cvvInp = document.querySelector('.cvv-input')
const cvv = document.querySelector('.cvv-box')

///adding card numbers to disply in front:
numberInp.oninput = () => {
    cardNum.innerText = numberInp.value;
}


///adding holders' name to disply in front:
holderInp.oninput = () => {
    holderName.innerText = holderInp.value;
}

///adding moth and year to disply in front:
monthInp.oninput = () => {
    expMonth.innerText = monthInp.value + ' /';
}
yearInp.oninput = () => {
    expYear.innerText = yearInp.value;
}


///adding cvv to disply in front:
cvvInp.onmouseenter = () => {
    card3D.style.transform = 'perspective(1000px) rotateY(180deg)';
};

cvvInp.onmouseleave = () => {
    card3D.style.transform = 'perspective(1000px) rotateY(0deg)';
};

cvvInp.oninput = () => {
    cvv.innerText = cvvInp.value;
}


////making Array of background images

const arrImg = [
    "img/1.jpeg",
    "img/2.jpeg",
    "img/3.jpeg",
    "img/4.jpeg",
    "img/5.jpg",
    "img/6.jpeg",



]

////select random image
const randomImage = arrImg[Math.floor(Math.random() * arrImg.length)];

///display random image
card3D.style.backgroundImage = `url('${randomImage}')`;



////save to local storage
let localNumber = localStorage.getItem('cardNumber')
let localHolder = localStorage.getItem('cardHolder')
let localMonth = localStorage.getItem('month')
let localYear = localStorage.getItem('year')
let localCvv = localStorage.getItem('cvv')

if (localNumber != null && localHolder != null && localMonth != null && localYear != null && localCvv != null) {
    cardNum.innerText = localNumber
    numberInp.value = localNumber
    holderName.innerText = localHolder
    holderInp.value = localHolder
    expMonth.innerText = localMonth
    monthInp.value = localMonth
    expYear.innerText = localYear
    yearInp.value = localYear
    cvv.innerText = localCvv
    cvvInp.value = localCvv
}

const mySave = () => {
    if (numberInp.value.trim() != '' && holderInp.value.trim() != '' && monthInp.value.trim() != '' && yearInp.value.trim() != '' && cvvInp.value.trim() != '') {
        localStorage.setItem('cardNumber', numberInp.value)
        localStorage.setItem('cardHolder', holderInp.value)
        localStorage.setItem('month', monthInp.value)
        localStorage.setItem('year', yearInp.value)
        localStorage.setItem('cvv', cvvInp.value)
    }
}

