// Ejercicio de la imagen y el borde
const catImg = document.getElementById('catImg');

catImg.addEventListener('click', (evt) => {
    evt.target.classList.toggle('red-border');
});

// Ejercicio de los stickers
const inputsStickers = document.getElementsByName('sticker');
const showMessage = document.getElementById('showMessage');
const verifyBtn = document.getElementById('verifyBtn');
const QUANTITY = 10;

inputsStickers.forEach(inputSticker => {
    inputSticker.addEventListener('change', () => {
        showMessage.style.display = 'block';
        showMessage.innerText = getMessageStickers(getQtyStickers(inputsStickers))
    });
})

verifyBtn.addEventListener('click', () => {
    showMessage.style.display = 'block';
    showMessage.innerText = getMessageStickers(getQtyStickers(inputsStickers))
});

const getQtyStickers = (inputsStickers) => {

    let qty = 0;

    inputsStickers.forEach(input => {
        qty += Number(input.value);
    });

    return qty;
}

const getMessageStickers = (qty) => {

    if (isNaN(qty)) {
        return showMessage.innerText = `Ingrese solo números`;
    }

    if (qty >= QUANTITY) {
        return `Superó la cantidad de Stickers (10). Lleva: ${qty}. Modique la cantidad.`
    } else {
        return `Llevas: ${qty} stickers en total`;
    }

}

// Ejercicio de la contraseña
const numberOne = document.getElementById('numberOne');
const numberTwo = document.getElementById('numberTwo');
const numberThree = document.getElementById('numberThree');
const resultPassword = document.getElementById('resultPassword');
const password = { _ONE: '911', _TWO: '714' }

intoBtn.addEventListener('click', () => {

    const values = {
        one: numberOne.value,
        two: numberTwo.value,
        three: numberThree.value
    }
    resultPassword.style.display = 'block';
    resultPassword.innerText = verifyPassword(values);
})

const verifyPassword = ({ one, two, three }) => {
    const passwordSelect = one + two + three;

    if (passwordSelect === password._ONE) {
        return 'Coincide con password 1';
    } else if (passwordSelect === password._TWO) {
        return 'Coincide con password 2';
    } else {
        return 'Password incorrecto';
    }
}