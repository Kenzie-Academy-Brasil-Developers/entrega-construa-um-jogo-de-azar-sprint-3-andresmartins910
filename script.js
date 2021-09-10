// get elements
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const computerRandomChoice = document.getElementById('secret')
const resultContainer = document.getElementById('resultContainer')
const computerResultContainer = document.getElementById('computerResultContainer')

// get images
const rockImg = document.getElementById('rockImg')
const paperImg = document.getElementById('paperImg')
const scissorsImg = document.getElementById('scissorsImg')

// create events
rock.addEventListener('click', chooseRock)
paper.addEventListener('click', choosePaper)
scissors.addEventListener('click', chooseScissors)

// randomize computer result
const options = ['rock', 'paper', 'scissors']
const randomChoice = options[Math.floor(Math.random() * options.length)]

// user choice
let userChoice = ''

// rock, paper and scissors functions
function chooseRock() {
    userChoice = 'rock'
    compareResults()

    return userChoice
}

function choosePaper() {
    userChoice = 'paper'
    compareResults()

    return userChoice
}

function chooseScissors() {
    userChoice = 'scissors'
    compareResults()

    return userChoice
}

// image function
function appendImage() {
    const questionMark = document.getElementById('secret')
    questionMark.remove()

    const imageContainer = document.createElement('img')

    if (randomChoice === 'rock') {
        computerResultContainer.appendChild(imageContainer)
        imageContainer.src = "./img/rock.png"
    }

    if (randomChoice === 'paper') {
        computerResultContainer.appendChild(imageContainer)
        imageContainer.src = "./img/paper.png"
    }

    if (randomChoice === 'scissors') {
        computerResultContainer.appendChild(imageContainer)
        imageContainer.src = "./img/scissors.png"
    }
}

// function to compare the choices
function compareResults() {
    const paragraph = document.createElement('p')

    if (userChoice === randomChoice) {
        resultContainer.appendChild(paragraph)
        paragraph.innerText = 'The game tied!'
        paragraph.id = 'resultTied'
        appendImage()
    }

    if (userChoice === 'rock' && randomChoice === 'paper') {
        resultContainer.appendChild(paragraph)
        paragraph.innerText = 'You lose!'
        paragraph.id = 'resultLose'
        appendImage()
    }

    if (userChoice === 'rock' && randomChoice === 'scissors') {
        resultContainer.appendChild(paragraph)
        paragraph.innerText = 'You win!'
        paragraph.id = 'resultWin'
        appendImage()
    }

    if (userChoice === 'paper' && randomChoice === 'scissors') {
        resultContainer.appendChild(paragraph)
        paragraph.innerText = 'You lose!'
        paragraph.id = 'resultLose'
        appendImage()
    }

    if (userChoice === 'paper' && randomChoice === 'rock') {
        resultContainer.appendChild(paragraph)
        paragraph.innerText = 'You win!'
        paragraph.id = 'resultWin'
        appendImage()
    }

    if (userChoice === 'scissors' && randomChoice === 'rock') {
        resultContainer.appendChild(paragraph)
        paragraph.innerText = 'You lose!'
        paragraph.id = 'resultLose'
        appendImage()
    }

    if (userChoice === 'scissors' && randomChoice === 'paper') {
        resultContainer.appendChild(paragraph)
        paragraph.innerText = 'You win!'
        paragraph.id = 'resultWin'
        appendImage()
    }
}