export function searchCards (cards, searchText){
    const text =searchText.toLowerCase().trim()
    const result = cards.filter(card =>card.title.toLowerCase().includes(text) )
    return result

}

export function filterByType(cards , type) {

    let result = cards

if (type !== "all"){


    result = cards.filter(card => card.type === type)

}
return result


}




export function paginate (cards, page ) {
    const bda = (page -1) * 8 
    const sali =(page * 8)



    const result = cards.slice(bda , sali)

    return result
}