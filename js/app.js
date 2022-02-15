document.body.style.backgroundColor = "rgba(62, 73, 122,.90)";
document.getElementById('main').style.backgroundColor = "rgba(62, 73, 122,.5)";
// use function 
function count(name, price, isTrue) {

    const inputValue = document.getElementById(name + '-input');
    if (isTrue == true) {
        inputValue.value = parseInt(inputValue.value) + 1;
    } else {
        if (inputValue.value > 0) {
            inputValue.value = parseInt(inputValue.value) - 1;
        }
    }
    const newNumber = inputValue.value;
    const singlePrice = document.getElementById(name + '-price');
    console.log(singlePrice)
    singlePrice.innerText = price * newNumber;
    calculation();

}
//camera price 
document.getElementById('camera-plus').addEventListener('click', function () {
    count('camera', 1588, true)
});
document.getElementById('camera-minus').addEventListener('click', function () {
    count('camera', 1588, false)
});

//lance price 
document.getElementById('lance-plus').addEventListener('click', function () {
    count('lance', 150, true)
});
document.getElementById('lance-minus').addEventListener('click', function () {
    count('lance', 150, false)
});

// total ,subtotal and tax calculation

function calculation() {
    const subTotal = document.getElementById('subtotal-price');
    const lancePrice = document.getElementById('lance-price').innerText;
    const cameraPrice = document.getElementById('camera-price').innerText;
    subTotal.innerText = Number(lancePrice) + Number(cameraPrice);
    // tax rating 
    const tax = document.getElementById('tax-price');
    tax.innerText = parseInt(subTotal.innerText / 10);
    // total calculation
    const total = document.getElementById('total-price');
    total.innerText = Number(subTotal.innerText) + Number(tax.innerText);
}