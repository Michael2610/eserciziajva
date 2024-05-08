const Tform = document.getElementById('form')
const Tinput = document.getElementById('input')
const todosUL = document.getElementById('todos')

const Todo = JSON.parse(localStorage.getItem('todos'))

if(Todo) {
    Todo.forEach(todo => addTodo(todo))
}

Tform.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

function addTodo(todo) {
    let todoText = Tinput.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        }) 

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        }) 

        todosUL.appendChild(todoEl)

        Tinput.value = ''

        updateLS()
    }
}

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        Todo.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    
}