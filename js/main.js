const userTurn = document.querySelectorAll('.choice')
const userScoreEl = document.getElementById('userScoreVal')
const computerScoreEl = document.getElementById('compScoreVal')
const userInput = document.getElementById('result-user-stat')
const compInput = document.getElementById('result-comp-stat')
const finalWinner = document.getElementById('result-final-stat')

let userScore = userScoreEl.innerText
let computerScore = computerScoreEl.innerText
const rps = {
    r:'Rock',
    p:'Paper',
    s:'Scissor'
}

userTurn.forEach(element => {
    element.addEventListener('click',() =>{
        const userChoice = element.id
        userInput.innerText = 'User: ' + rps[userChoice]
        const computerChoice = computerTurn()
        compInput.innerText = 'Computer: ' + rps[computerChoice]
        findWInner(userChoice, computerChoice)
    })
});

function computerTurn(){
    return userTurn[Math.floor(Math.random()*userTurn.length)].id    
}

function findWInner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        userScore++
        computerScore++
    }else if(userChoice === 'r' && computerChoice === 's'){
        userScore++
    }else if(userChoice === 's' && computerChoice === 'p'){
        userScore++
    }else{
        computerScore++
    }
    computerScoreEl.innerText = computerScore
    userScoreEl.innerText = userScore
    finalWinner.innerText = (computerScore > userScore) ? 'Winner: Computer' : 'Winner: User'
}