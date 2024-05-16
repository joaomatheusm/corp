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
    if(input.value > 1) {
        input.value--;
    }
});

add.addEventListener('click', () => input.value++);