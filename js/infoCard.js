const infoBagroundDark = document.getElementById("infoBagroundDark")

const infoCardContent = document.getElementById("infoCardContent")



export function openModel(card) {
   let typeCard = ""
   let time = ""
   
   if (card.type === "movie") {
     typeCard ="Film"
     time = `Duree : ${card.duration} min`

   }else {
    typeCard ="Serie"
    time =`Saisons : ${card.seasons.length}`
   }

//     info card text details
   infoCardContent.innerHTML = `
   <button id ="closeModel" class ="text-2xl font-bold">X</button>  
   <img src ="${card.image}" class ="w-full max-h-96 object-cover rounded mb-4">
   <h2 class ="text-2xl font-bold mb-2">${card.title}</h2>
   <p> Type : ${typeCard}</p>
     <p> Annee  : ${card.releaseYear}</p>
     <p> ${time}</p>
     <p> Genres : ${card.genres.join(", ")}</p>
     <p> Realisateurs : ${card.directors.join(", ")}</p>
     <p> Pays : ${card.productionCountries.join(", ")}</p>
     <p class ="mt-3">${card.description}</p>
 `
 infoBagroundDark.classList.remove("hidden")
  infoBagroundDark.classList.add("flex")





  const closeButton = document.getElementById("closeModel")
  
  closeButton.addEventListener("click" , closeModel)


}


export function closeModel(){
    infoBagroundDark.classList.add("hidden")
  infoBagroundDark.classList.remove("flex") 
}