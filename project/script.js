let randomNum=parseInt(Math.random()*10+1)
const user=document.querySelector('#guess')
const submit=document.querySelector('#button')
const attemp=document.querySelector('.atttemp')
const previous=document.querySelector('.previous')
const answer=document.querySelector('#ans')
const startOver=document.querySelector('.result')

let prevGuess=[]
let numGuess=1
let playGame=true
const p=document.createElement('p')
if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess=parseInt(user.value)
        // console.log(guess)
        validation(guess)
    })
}

function validation(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess<1){
        alert('please enter a number more than 1')
    }else if(guess>10){
        alert('please enter a number less than 10')
    }else{
        prevGuess.push(guess)
        if(numGuess>10){
            displayGuess(guess)
            displayMessage(`Game over & random number was ${randomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNum){
        displayMessage('You won')
    }else if(guess<randomNum){
        displayMessage("Guess is too low")
    }else if(guess>randomNum){
        displayMessage("Guess is too high   ")
    }
}
function displayGuess(guess){
    user.value=""
    previous.innerHTML+=`${guess}, `
    numGuess++;
    attemp.innerHTML=`${11-numGuess}`

}

function displayMessage(message){
    answer.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    user.value=''
    user.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame=false
    startGame()
}


function startGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',()=>{
        randomNum=parseInt(Math.random()*10+1)
        prevGuess=[]
        numGuess=1
        previous.innerHTML=''
        attemp.innerHTML=`${11-numGuess}`
        user.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}