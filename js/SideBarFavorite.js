import { jibFavorites } from "./favorites.js";

export function makeFavorites(allCards) {
const favoriteLista = document.getElementById("favoriteListe")
const favoriteCount = document.getElementById("favoriteCount")



// jib liya le is mn local storage b7laid [2] breakingBad
const allcardsID = jibFavorites()

// for each id dyal find lcard real b title w imaje w wdkde in all cards

const favCards = allcardsID.map(id =>allCards.find(card => card.id === id) )

// count films and series with reduce 

const count = favCards.reduce((total, card)=> {
    if (card.type ==="movie") {
        total.movies = total.movies + 1
    }else {
        total.series =total.series + 1

    }
    return total
}, { movies: 0, series: 0})


// nktbo lcount under title dyl favorites

favoriteCount.textContent = count.movies +"  films " + count.series + "series"



// nrssmo  for each favorite

favoriteLista.innerHTML = favCards.map(cardInFav => `
    <div class ="flex items-center gap-2 bg-gray-700 rounded p-2">
    <img src ="${cardInFav.image}" alt ="${cardInFav.title}" class ="w-10 h-14 object-cover rounded">
    <div class = "flex-1">
    <p class ="font-bold text-sm">${cardInFav.title}</p>
    <p class ="text-xs text-gray-400">${cardInFav.releaseYear}</p>
    </div>
    <button data-remove = "${cardInFav.id}" class ="text-xl px-2">X</button>
    </div> `).join("")

}



