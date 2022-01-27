const coldURL = 'https://api.sampleapis.com/coffee/iced';
const hotURL = 'https://api.sampleapis.com/coffee/hot';


//Fetch requests-----------------------------------------------------------
function fetchColdCoffee() {
    fetch(coldURL)
        .then(resp => resp.json())
        .then(coldData => {
            coldData.splice(7, 2)//remove 2 duplicates at the end
            coldData.forEach(renderCoffee);
        })
}
function fetchHotCoffee() {
    fetch(hotURL)
        .then(resp => resp.json())
        .then(hotData => {
            hotData.splice(20, 1) //remove the blank object in json
            hotData.forEach(renderCoffee);
        })
}
//-------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', (e) => {
    fetchHotCoffee()
    coffeeDivs.style.background = 'maroon'
})



//event listeners for cold/hot buttons to toggle between them--------------
const coffeeDivs = document.getElementById('coffee-collection')

const coldButton = document.getElementById('coldBtn')
coldButton.addEventListener('click', (e) => {
    e.preventDefault()
    coffeeDivs.innerHTML = ''
    fetchColdCoffee()
    coffeeDivs.style.background = 'lightblue'
})

const hotButton = document.getElementById('hotBtn')
hotButton.addEventListener('click', (e) => {
    e.preventDefault()
    coffeeDivs.innerHTML = ''
    fetchHotCoffee()
    coffeeDivs.style.background = 'maroon'
})
//-------------------------------------------------------------------------


function renderCoffee(coffee) {

    const coffeeCard = document.createElement("div");
    coffeeCard.className = "card"

    const coffeeTitle = document.createElement("h2")
    coffeeTitle.innerText = coffee.title

    const coffeeDes = document.createElement("p")
    coffeeDes.innerText = coffee.description
    

    const ingredients = document.createElement("p")
    ingredients.innerText = coffee.ingredients.join(', ')

    const likeBtn = document.createElement("button")
    likeBtn.innerText = "Like ❤️"

    let likes = document.createElement('p')
    likes.innerText = `${Math.floor(Math.random() * 11)} Like(s)`

    likeBtn.addEventListener('click', () => {
        let newLikes = `${parseInt(likes.innerText) + 1
            } Like(s)`

        // tell the p tags text to look like that new value
        likes.innerText = newLikes
        
        //console.log(parseInt(likes.innerText) + 1)
    })

    coffeeCard.append(coffeeTitle, coffeeDes, ingredients, likeBtn, likes)

    document.getElementById("coffee-collection").appendChild(coffeeCard)

}

//Button to scroll back to the top of the page-----------------------------------------
topButton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => scrollFunction();

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        topButton.style.display = "block"
    } else {
        topButton.style.display = "none";
    }
}
topButton.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
}));
//---------------------------------------------------------------------------------------



