const inputEl = document.getElementById('input')
const btnEL = document.getElementById('btn')
const todoEL = document.getElementById('todo')

btnEL.addEventListener('click', () => {
    const newTodo = inputEl.value;
    if (newTodo == "") {
        alert("Please Write Todo")

    } else if (newTodo !== "") {
        // adding List
        const item = document.createElement('li')
        item.innerHTML = newTodo;

        // Delete Element / Function
        const deleteEL = document.createElement('button')
        deleteEL.innerHTML = 'X'
        deleteEL.classList.add('delete-todo')
        deleteEL.addEventListener('click', () => {
            item.remove();
        })
        item.appendChild(deleteEL)
        todoEL.appendChild(item)
        inputEl.value = ''
    }
})

