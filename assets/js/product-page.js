const colorP = document.querySelector('#color-p');
const colorRb = [...document.getElementsByName('color')];
const sizeP = document.querySelector('#size-p');
const sizeRb = [...document.getElementsByName('size')];

colorRb.forEach(rb => {
    rb.addEventListener('click', () => {
        const checkedColor = colorRb.find(rb => rb.checked);
        if (checkedColor) {
            colorP.innerHTML = `Cor: ${checkedColor.value}`;
        }
    });
});

sizeRb.forEach(rb => {
    rb.addEventListener('click', () => {
        const checkedSize = sizeRb.find(rb => rb.checked);
        if (checkedSize) {
            sizeP.innerHTML = `Tamanho: ${checkedSize.value}`;
        }
    });
});

let minus = document.querySelector('.minus');
let add = document.querySelector('.add');
let input = document.querySelector('.value');

minus.addEventListener('click', () => {
    if (input.value > 1) {
        input.value--;
    }
});

add.addEventListener('click', () => input.value++);

const imgColCream = [...document.querySelector('.cream .img-col').children];
const imgColGray = [...document.querySelector('.gray .img-col').children];
const creamMainImg = document.querySelector('.main-img-cream').firstChild.nextSibling;
const grayMainImg = document.querySelector('.main-img-gray').firstChild.nextSibling;

function changeMainImg(evt) {
    if (evt.target.parentNode.classList.contains('cream')) {
        creamMainImg.src = evt.target.src;
    } else {
        grayMainImg.src = evt.target.src;
    }
}

function removeAllSelected() {
    imgColCream.forEach(e => e.classList.remove('selected'));
    imgColGray.forEach(e => e.classList.remove('selected'));
}

function changeSelectedImg(evt) {
    if (evt.target.className !== 'selected') {
        removeAllSelected();
        evt.target.classList.add('selected');
        changeMainImg(evt);
    }
}

imgColCream.forEach((el) => {
    el.addEventListener('click', (evt) => changeSelectedImg(evt));
});

imgColGray.forEach((el) => {
    el.addEventListener('click', (evt) => changeSelectedImg(evt));
});

const labelColor = [...document.querySelectorAll('.label-color')];
const iconColor = [...document.querySelectorAll('.label-i')];
const creamBox = document.querySelector('.cream');
const grayBox = document.querySelector('.gray');

function changeColorDisplay(evt) {
    removeAllSelected();

    if (evt.target.classList.contains('label-cream') || evt.target.parentNode.classList.contains('label-cream')) {
        creamMainImg.src = imgColCream[0].src;
        imgColCream[0].classList.add('selected');

        creamBox.style.display = 'flex';
        grayBox.style.display = 'none';
    }

    if (evt.target.classList.contains('label-gray') || evt.target.parentNode.classList.contains('label-gray')) {
        grayMainImg.src = imgColGray[0].src;
        imgColGray[0].classList.add('selected');

        creamBox.style.display = 'none';
        grayBox.style.display = 'flex';
    }
}

labelColor.forEach(el => {
    el.addEventListener('click', evt => changeColorDisplay(evt));

    el.firstChild.addEventListener('click', evt => changeColorDisplay(evt));
});
