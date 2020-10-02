document.addEventListener('DOMContentLoaded', () => {

  const cardArray = [
    {
      name: 'apple',
      img: 'images/apple.png'
    },
    {
      name: 'avocado',
      img: 'images/avocado.png'
    },
    {
      name: 'broccoli',
      img: 'images/broccoli.png'
    },
    {
      name: 'eggplant',
      img: 'images/eggplant.png'
    },
            {
      name: 'watermelon',
      img: 'images/watermelon.png'
    },
    {
      name: 'peas',
      img: 'images/peas.png'
    },
    {
      name: 'pineapple',
      img: 'images/pineapple.png'
    },
    {
      name: 'strawberry',
      img: 'images/carrot.png'
    },
    {
      name: 'apple',
      img: 'images/apple.png'
    },
    {
      name: 'avocado',
      img: 'images/avocado.png'
    },
    {
      name: 'broccoli',
      img: 'images/broccoli.png'
    },
    {
      name: 'eggplant',
      img: 'images/eggplant.png'
    },
    {
      name: 'pineapple',
      img: 'images/pineapple.png'
    },
    {
      name: 'strawberry',
      img: 'images/carrot.png'
    },
        {
      name: 'watermelon',
      img: 'images/watermelon.png'
    },
    {
      name: 'peas',
      img: 'images/peas.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/front.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }


  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/done.png')
      cards[optionTwoId].setAttribute('src', 'images/done.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/done.png')
      cards[optionTwoId].setAttribute('src', 'images/done.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/front.png')
      cards[optionTwoId].setAttribute('src', 'images/front.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip your card
  function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
});
