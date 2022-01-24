const coldURL = 'https://api.sampleapis.com/coffee/iced';
const hotURL = 'https://api.sampleapis.com/coffee/hot';

fetch(coldURL)
    .then(resp => resp.json())
    .then(data => console.log(data));


fetch(hotURL)
    .then(resp => resp.json())
    .then(data => data.forEach(renderCoffee));


function renderCoffee(coffee) {
    //do some stuff with ONE toy

    const coffeeCard = document.createElement("div");
    coffeeCard.className = "card"

    const coffeeTitle = document.createElement("h2")
    coffeeTitle.innerText = coffee.title

    const coffeeDes = document.createElement("p")
    coffeeDes.innerText = coffee.description
    // toyImg.className = "toy-avatar"


    const ingredients = document.createElement("p")
    ingredients.innerText = coffee.ingredients

    const likeBtn = document.createElement("button")
    likeBtn.innerText = "Like ❤️"

    const likes = document.createElement('p')
    likes.innerText = 0

    likeBtn.addEventListener('click', () => {
        // console.log(+likes.innerText + 1)
        // grab the p tag text content
        // turn it into a number, and add 1
        const newLikes = +likes.innerText + 1
        // tell the p tags text to look like that new value
        likes.innerText = newLikes
    })

    coffeeCard.append(coffeeTitle, coffeeDes, ingredients, likeBtn, likes)

    document.getElementById("coffee-collection").appendChild(coffeeCard)

}
