const container = document.querySelector("#container")
const list = document.querySelector("#list")
const buttonSubmit = document.querySelector("#button-submit")
const itemList = document.querySelector("#input-text")

const createNewItem = (newItem) => {
    const newLi = document.createElement("li")
    newLi.innerHTML = newItem
    list.appendChild(newLi)
}

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault()
    const newItem = itemList.value + `<span class="remove">🗑️</span>`
    console.log(newItem)

    const textButtonSubmit = buttonSubmit.querySelector("span")
    textButtonSubmit.innerText = "Item Adicionado"
    setTimeout(() => {
        textButtonSubmit.innerText = "Adicionar"
    },2000)
    createNewItem(newItem)
})
