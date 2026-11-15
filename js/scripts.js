const list = document.querySelector("#list")
const buttonSubmit = document.querySelector("#button-submit")
const itemList = document.querySelector("#input-text")
const tasks = document.querySelector("footer small")


const tarefasRestantes = () => {
    const totalTarefas = list.children.length
    tasks.innerHTML = `${totalTarefas} tarefas restantes.`
}

const createNewItem = (newItem) => {
    const newLi = document.createElement("li")
    newLi.innerHTML = newItem
    list.appendChild(newLi)

    const removeItem = newLi.querySelector(".removeItem")
    removeItem.addEventListener("click", ()=>{
        newLi.remove()
        tarefasRestantes()
    })

    newLi.addEventListener("click", () => {
        newLi.classList.toggle("concluido")
    })
}
buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault()
    if (itemList.value.trim() === "") return
    const newItem = itemList.value + `<span class="removeItem">🗑️</span>`

    const textButtonSubmit = buttonSubmit.querySelector("span")
    textButtonSubmit.innerText = "Item Adicionado"
    setTimeout(() => {
        textButtonSubmit.innerText = "Adicionar"
    },2000)

    createNewItem(newItem)
    itemList.value = ""
    tarefasRestantes();
})
