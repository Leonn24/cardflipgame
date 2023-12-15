// Card Array

const cardArray = [
    {
        name: 'Cloud',
        img: 'images/Cloud.jpg',
    },
    {
        name: 'Barett',
        img: 'images/Barett.jpg',
    },
    {
        name: 'Chocobo',
        img: 'images/Chocobo.jpg',
    },
    {
        name: 'Seph',
        img: 'images/Seph.jpg',
    },
    {
        name: 'Red XIII',
        img: 'images/Red XIII.jpg',
    },
    {
        name: 'Tifa',
        img: 'images/Tifa.jpg',
    },
    {
        name: 'Vincent',
        img: 'images/Vincent.jpg',
    },
    {
        name: 'Yuffie',
        img: 'images/Yuffie.jpg',
    },
    {
        name: 'Aerith',
        img: 'images/Aerith.jpg',
    },
    {
        name: 'Cloud',
        img: 'images/Cloud.jpg',
    },
    {
        name: 'Barett',
        img: 'images/Barett.jpg',
    },
    {
        name: 'Chocobo',
        img: 'images/Chocobo.jpg',
    },
    {
        name: 'Seph',
        img: 'images/Seph.jpg',
    },
    {
        name: 'Red XIII',
        img: 'images/Red XIII.jpg',
    },
    {
        name: 'Tifa',
        img: 'images/Tifa.jpg',
    },
    {
        name: 'Vincent',
        img: 'images/Vincent.jpg',
    },
    {
        name: 'Yuffie',
        img: 'images/Yuffie.jpg',
    },
    {
        name: 'Aerith',
        img: 'images/Aerith.jpg',
    },
    {
        name: 'cardBack',
        img: 'images/cardBack.png',
    },
    {
        name: 'white',
        img: 'images/white.png',
    }
]

cardArray.sort(() => 0.5 - Math.random())

//--- Above is a shortcut to sort arrays randomly using .sort ---//

const gridDisplay = document.querySelector('#grid')
const cardChosen = []

function createBoard() {
    for (i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/backCardsmall.png');
        card.setAttribute('data-id', i);
        cardChosen.push()
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
        // console.log(card, i)
    }
}

createBoard();

function flipCard(){
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    console.log('clicked', cardId)
    console.log(cardChosen)
    this.setAttribute('src', cardArray[cardId].img)
}