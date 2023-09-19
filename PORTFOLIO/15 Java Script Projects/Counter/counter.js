const value = document.querySelector("#value")
const increase = document.querySelector('.btn-increase')
const reset = document.querySelector('.btn-reset')
const decrease = document.querySelector('.btn-decrease')

let count = 0
value.innerText = count

increase.addEventListener('click', function(){
    if(count < 100){
        count ++
        value.innerText = count
        value.style.color = "green"
    }
})

decrease.addEventListener('click', function(){
    if(count > 0){
        count --
        value.innerText = count
        value.style.color = "red"
    }
})

reset.addEventListener('click', function(){
    if(count >=0){
        count = 0
        value.innerText = count
        value.style.color = "black"
    }
})
