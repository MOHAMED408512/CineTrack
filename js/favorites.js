// function jib favorites 3ytna 3liha f sideBarFavorites.js bhd tari9a

// const ids = jibFavorites()   it means take the ids from local storage

export function jibFavorites() {
return JSON.parse(localStorage.getItem("favorites")) || []

}

function saveFavorites (favs) {
    localStorage.setItem("favorites" , JSON.stringify(favs))
}


// chekc if card is favorite


export function isFavorite (id) {
    const favs = jibFavorites()

      return favs.includes(id)
}







// ila bra utilisateur y7yd chi fav mn Favoris liste
export function removeFavorite(idLiKynFavoris){

    const favs = jibFavorites().filter(favId => favId !== idLiKynFavoris)

saveFavorites(favs)

}




 export function switchFavoriteANDnonFavorite (savedIdinFavorite) {

// jib list dyal ids mn localStorage
const favs = jibFavorites()

// wx had id already f lista dyl favorites wla la

if (favs.includes(savedIdinFavorite)){

    removeFavorite(savedIdinFavorite)        //Ila ah already favorite remove it

}else {
    favs.push(savedIdinFavorite)             // not a favorite yet / add it
    saveFavorites(favs)

} 
}

 