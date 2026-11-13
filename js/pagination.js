export function jibPagination (totalCards , currentPage , bdelPage) {
    const pagination = document.getElementById("pagination")
    const totalPages = Math.ceil(totalCards / 8) 
    
    // 5wi od buttons

    pagination.innerHTML = ""








    // butona per pagee tcreya lina botona 3la kola page
    for ( let i = 1 ; i<= totalPages ;i++) {
        const btn = document.createElement("button")
        btn.textContent = i   // i=1 then 2 then 3...

        // ytbdl lon f current page bonus 

        if (i === currentPage) {
            btn.className = "px-4 py-2 rounded bg-purple-700 text-white"
        }

        else{
             btn.className="px-4 py-2 rounded bg-purple-300"

        }

      btn.addEventListener("click" ,() =>  bdelPage(i))

      pagination.appendChild(btn)

      }

}
