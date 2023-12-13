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
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard() {
    for (let i = 0; i < 19; i++) {
        const card = document.createElement('img')
    }
}