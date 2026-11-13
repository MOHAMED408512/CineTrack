import { jibMovietSeries } from "./api.js";
import { jibCards } from "./cards.js";


import { openModel , closeModel } from "./infoCard.js";
import { searchCards , filterByType , paginate } from "./filter.js";
import { jibPagination } from "./pagination.js"


import { switchFavoriteANDnonFavorite , removeFavorite } from "./favorites.js";
import { makeFavorites } from "./SideBarFavorite.js";




let allCards = []


let currentPage = 1

        
async function startiii() {
    
    try {
        allCards = await jibMovietSeries()
        updatelPage() // 8cards per page
makeFavorites(allCards) // show the saved favorites after a resfresh
    } catch (error) {
        showError ("Impossible de charger les donnes , ressayez")
    }
}


function showError(message) {
    const errorD = document.getElementById("errorMessage")
    errorD.textContent = message
    errorD.classList.remove("hidden")
}

function updatelPage() {







    // 9lb 3la card recherche
    const searchi3laCards = searchCards(allCards , searchInput.value)







// filtri abogoss
const filtriCardsMovieOrSeries =filterByType(searchi3laCards , typeSelect.value) 







// pagination awld 3my (8 dles cards per page()
const cardsPerPageFpagination = paginate(filtriCardsMovieOrSeries , currentPage)








// afficher cards w boutons d page f interfaceµ




jibCards(cardsPerPageFpagination)                  // function dylha ltht (bdelpage)
jibPagination(filtriCardsMovieOrSeries.length , currentPage , bdelPage )

} 


function bdelPage(page) {
    currentPage = page

updatelPage()

}









const searchInput = document.getElementById("searchInput")

searchInput.addEventListener("input" , () => {
    currentPage =1
    updatelPage()
})





        const typeSelect = document.getElementById("typeSelect")
typeSelect.addEventListener("change" , ()=> {
    currentPage = 1
    updatelPage()
})




        const containerCards = document.getElementById("containerCards")
// wx wrkna 3la heart
containerCards.addEventListener("click" , (event) => {






    // check is user clicked on heart
    const heartButton = event.target.closest("[data-favorite]")

        if(heartButton) {
            
            event.stopPropagation()   // dont open the modal
          switchFavoriteANDnonFavorite(heartButton.dataset.favorite) // add or remove lcard id mn fav 3an tari9 heart button
            updatelPage()
            makeFavorites(allCards)
            return
        }







    // ila wrk 3la card open model  otherwise click

    const clickedCard = event.target.closest(".card")
    //  if the click was not on a card stop here
    if (!clickedCard) return



    // 5od the id li flcard daata-id

    const cardId = clickedCard.dataset.id

    //   jbt lcard kamla full card b les fonctions img titre .. f liste

const foundCard = allCards.find(card => card.id ===cardId) // cardID hea fullcard

// open model
    openModel(foundCard)

} )






 // remove favorite from sidebar

        const favoriteList = document.getElementById("favoriteListe")

        favoriteList.addEventListener("click" ,(e) => {
            // check if user wrk 3la x button 
            const button =e.target.closest("[data-remove]") 

if (button) {
                // get id dyal favorite
                const cardID = button.dataset.remove

                // remove it from localStorage

                removeFavorite(cardID)


                // show lfavorites again

                makeFavorites(allCards)

                // update lhearts yrj3o kef kanu
                updatelPage()
            }

        })



// closi lmodeling
const infoBagroundDark = document.getElementById("infoBagroundDark")
infoBagroundDark.addEventListener("click", (event) => {
    if (event.target.id === "infoBagroundDark") 
        closeModel()

})


startiii()





