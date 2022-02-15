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
    const newNumer = inputValue.value;
    const singleprice = document.getElementById(name + '-price');
    console.log(singleprice)
    singleprice.innerText = price * newNumer;

}
//camera price 
document.getElementById('camara-plus').addEventListener('click', function() {
    count('camara', 1588, true)
});
document.getElementById('camara-minus').addEventListener('click', function() {
    count('camara', 1588, false)
});

//lance price 
document.getElementById('lance-plus').addEventListener('click', function() {
    count('lance', 150, true)
});
document.getElementById('lance-minus').addEventListener('click', function() {
    count('lance', 150, false)
});