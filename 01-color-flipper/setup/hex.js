const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const container = document.querySelector(".container");
const color = container.querySelector(".color");
const btn = container.querySelector(".btn");

function randomCode(){
    return Math.floor(Math.random() * hex.length);
}

function colorSwitch(){
    let pickColor = '#';
    for(let i=0; i < 6; i++){
        pickColor += hex[randomCode()];
    }

    document.body.style.backgroundColor = pickColor;
    color.textContent = pickColor;
}

btn.addEventListener('click', colorSwitch);