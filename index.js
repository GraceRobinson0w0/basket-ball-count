let sum1El = document.getElementById("sum1-el")
let sum2El = document.getElementById("sum2-el")

let count = 0 
let count2 = 0

function add1H() {
    count = count + 1
    sum1El.innerText = count
}

function add2H() {
    count = count + 2
    sum1El.innerText = count
}

function add3H() {
    count = count + 3
    sum1El.innerText = count
}

function add1G() {
    count2 = count2 + 1
    sum2El.innerText = count2
}

function add2G() {
    count2 = count2 + 2
    sum2El.innerText = count2
}

function add3G() {
    count2 = count2 + 3
    sum2El.innerText = count2
}
