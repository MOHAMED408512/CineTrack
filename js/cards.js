import { isFavorite } from "./favorites.js" //  function tell favorite f favorite.js tells ila card's id is saved in the favorites





export function createCard(card){

   let genre =""
   let color =""
   if(card.type =="movie"){
    genre ="Film"
    color ="bg-purple-600 text-gray-800 font-bold"}
else {
    genre ="series"
    color="bg-purple-400 text-gray-900 font-bold"

   }


// 9lb full when clicking to go to favorites


   let heart = "♡"
   if (isFavorite(card.id)) {
    heart ="♥"
   }
 


   
   return ` 
            <div data-id="${card.id}" class ="card relative flex flex-col gap-3 card rounded-lg border-gray-300 overflow-hidden cursor-pointer">
            
            <img src ="${card.image}" class="w-full h-72 object-cover rounded-lg">
            
              <h2 class ="text-xl font-bold text-gray-1000">
                 ${card.title}
                  </h2> 
                   <p class="text-gray-700 text-gray-900 font-bold">
                   Annne : ${card.releaseYear}
                   </p>
                   <span class ="${color} rounded-lg px-3 py-2 text-center">
                   <a href="https://1hd.one/series/breaking-bad-18349/1-1/" target="_blank">
                         ${genre} </a>
                         </span>
                        <button data-favorite ="${card.id}" class ="absolute right-2 top-2 z-10 rounded-lg bg-purple-400 p-1 text-2xl text-red-500" aria-label="Ajouter aux favoris">${heart}</button>
                         </div>
                         `

        

}

export function jibCards(cards) {
const container = document.getElementById("containerCards")
container.innerHTML = cards.map(createCard).join("")

}