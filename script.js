const rankBoard = document.querySelector(".rank-board")
const checkBtn = document.querySelector("[data-check]")
const richest = [
    "Elon Musk",
    "Bernalt Arnault & family",
    "Jeff Bezos",
    "Bill Gates",
    "Gautam Adani & family",
    "Warren Buffett",
    "Mukesh Ambani",
    "Larry Ellison",
    "Larry Page",
    "Carlos Slim & family",
]

let listItems = []

let startIndex;

function creatList(){
    [...richest].map(a => ({name: a, sort: Math.random()}))
    .sort((a,b) => a.sort - b.sort)
    .map(a => a)
    .forEach((person, index) =>{
        li = document.createElement("li")
        li.setAttribute("class", "rank-person")
        li.setAttribute("data-index", `${index}`)

        li.innerHTML += `
            <div class="rank-number">${index + 1}</div>
            <div class="draggable" draggable="true">
                <p class="rank-name">${person.name}</p>
                <span class="rank-mover"></span>
            </div>`

        listItems.push(li)

        rankBoard.appendChild(li)

    })

}

creatList()
const draggableElement = document.querySelectorAll(".draggable")



draggableElement.forEach(element =>{
    element.addEventListener("dragend", (e) =>{

    })

})

draggableElement.forEach(element =>{
    element.addEventListener("dragenter", (e) =>{
    })
})

draggableElement.forEach(element =>{
    element.addEventListener("dragleave", (e) =>{
        element.classList.remove("over")
    })
})
draggableElement.forEach(element =>{
    element.addEventListener("dragover", (e) =>{
        e.preventDefault()
        element.classList.add("over")

    })
})

draggableElement.forEach(element =>{
    element.addEventListener("dragstart", dragStart)
})

draggableElement.forEach(element =>{
    element.addEventListener("drop", (e) =>{
        element.classList.remove("over")
        let dropIndex = e.target.closest("li").getAttribute("data-index")
        swapItems(startIndex, dropIndex)


    })
})

checkBtn.addEventListener("click", () =>{
    listItems.forEach((item, i) =>{
        let listNames = item.querySelector(".rank-name").textContent
        if(listNames == richest[i]){
            item.querySelector(".rank-name").classList.add("right")
        } else{
            item.querySelector(".rank-name").classList.add("wrong")

        }
    })
})

function dragStart(){
    startIndex = +this.closest("li").getAttribute("data-index")
}


function swapItems(startIndex, finalIndex){
    let itemOne = listItems[startIndex].querySelector(".draggable")
    let itemTwo = listItems[finalIndex].querySelector(".draggable")

    listItems[startIndex].append(itemTwo)
    listItems[finalIndex].append(itemOne)


}