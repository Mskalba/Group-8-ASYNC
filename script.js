var $addBtn;
var $list;

function main() {
    prepareDOMElements();
    prepareDOMEvents();
    addButtonClickHandler();
}

function prepareDOMElements() {
    $addBtn = document.getElementById('addTodo');
    $list = document.getElementById('list');
}

function prepareDOMEvents() {
    $addBtn.addEventListener('click', addButtonClickHandler);
    $list.addEventListener('click', listClickManager)
}

function listClickManager(ev) {
    removeElement(ev.target.id)
}

function removeElement(id) {
    axios.delete('http://195.181.210.249:3000/todo/' + id).then(
        () => {
            $list.innerHTML = '';
            addButtonClickHandler();
        }
    );
}

// function addButtonClickHandler() {
//     // fetch('http://195.181.210.249:3000/todo/', {method: 'POST', body: JSON.stringify({title: 'nowy'})})
//     //     .then(res => res.json())
//     //     .then(res => {
//     //         res.forEach(element => {
//     //             addNewElementToList(element.title);
//     //         });

//     //     })
//     //     .catch(err => {  })

//     axios.get('http://195.181.210.249:3000/todo/')
//         .then(responseFromTodoApi => {
//             responseFromTodoApi.data.forEach(element => {
//                 addNewElementToList(element.title + element.author, element.id);
//             })
//         })
// }

async function addButtonClickHandler() {
    var response = await axios.get('http://195.181.210.249:3000/todo/');

    response.data.forEach(element => {
        addNewElementToList(element.title + element.author, element.id);
    })
}

function addNewElementToList(title, mleko) {
    var newElement = createElement(title, mleko);

    $list.appendChild(newElement);
}

function createElement(title, maciek) {
    var newLi = document.createElement('li');
    newLi.id = maciek;
    newLi.innerText = title;

    return newLi;
}

document.addEventListener('DOMContentLoaded', main);