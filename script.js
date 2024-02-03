const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left span')
const score = document.querySelector('#score span')

let result = 0
let hitPosition
let currTime = 60
let timerId;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquarePos = squares[Math.floor(Math.random() * 9)]
    randomSquarePos.classList.add('mole')
    // console.log(randomSquarePos);
    hitPosition = randomSquarePos.id
}

squares.forEach(square => {
    square.addEventListener('click', () => {
        if(square.id === hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
    currTime--
    timeLeft.textContent = currTime 

    if(currTime == 0) {
        clearInterval(countDownTimer)
        clearInterval(timerId)
        alert("Game Over! Your Final score is " + result)
    }
}

let countDownTimer = setInterval(countDown, 1000)