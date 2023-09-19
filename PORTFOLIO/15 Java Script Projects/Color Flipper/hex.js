const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #b3358
const btn = document.getElementById ("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let hexColor = '#'
for(let x = 0; x < 6; x++ ){
    hexColor += hex [getRandomNumber()]
}
color.textContent = hexColor
document.body.style.backgroundColor = hexColor
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}