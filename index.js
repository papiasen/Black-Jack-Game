let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let cards = []
let message = ""
let isAlive = false
let hasBlackJack = false
let sum = 0

function renderGame() {
    cardsEl.textContent = "Cards: " + " " + cards[0] + " " + cards[1]
    if (cards[2]) {
        cardsEl.textContent += " " + cards[2]
    } if (cards[3]) {
        cardsEl.textContent += " " + cards[3]
    }

    // for (let i = 0; i < cards.length; i++) {
    //     cardsEl.textContent += cards[i] + " "
    // }

    sumEl.textContent = "Sum:" + " " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive = true
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function startGame() {

    let cardOne = Math.floor(Math.random() * 13) + 1
    if (cardOne > 10) {
        cardOne = 10
    } else if (cardOne === 1) {
        cardOne = 11
    }

    let cardTwo = Math.floor(Math.random() * 13) + 1
    if (cardTwo > 10) {
        cardTwo = 10
    } else if (cardTwo === 1) {
        cardTwo = 11
    }

    cards = [cardOne, cardTwo]
    sum = cardOne + cardTwo
    renderGame()

}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let cardThree = Math.floor(Math.random() * 13) + 1
        sum += cardThree
        cards.push(cardThree)
        renderGame()
    }
}