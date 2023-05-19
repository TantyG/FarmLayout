const incrementButton = document.querySelector('#button')
const quantity = document.querySelector('#shopping-bag')
let a = 0;
incrementButton.addEventListener("click", () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    quantity.innerText = a;
    console.log(a)
});