const newFileBtn = document.querySelector(".newFile");
const notes = document.querySelector(".notes");
const container = document.querySelector(".container");
const containerInput = document.querySelector(".container #text-input");
const containerTitle = document.querySelector(".container .title");
// console.log(newFileBtn, notes, container, containerInput);

function deleteIconsFunc() {
    let deleteIcons = document.querySelectorAll(".notes i");
    deleteIcons.forEach((elem) => {
        elem.addEventListener("click", () => {
            elem.parentElement.parentElement.remove();
        })
    })
}

let id = 2;

function IdGiver(elem) {
    elem.id = "_"+id;
}

document.querySelector(".container .fa-circle-xmark").addEventListener("click", () => {
    container.classList.remove("active");
    container.classList.remove("new");
})

newFileBtn.addEventListener("click", () => {
    containerInput.innerHTML = "";
    containerTitle.value = "";
    container.classList.add("active")
    container.classList.add("new")
    container.id = "_" + id;
    id++;
})

function newFileSave(title, data) {
    // container.style.display = "none";
    container.classList.remove("active")
    let HTML = `
    <div class="note" id="_${id}">
        <div class="header">
            <h4 class="title">${title}</h4>
            <i class="fa-solid fa-trash"></i>
        </div>
            <p class="show">${data}</p>
            <p class="data">${data}</p>
        </div>
    `;
    // document.querySelector(".notes #"+container.id).innerHTML = HTML;
    notes.innerHTML += HTML;
    // console.log(container.id);
    // console.log(document.querySelector(`.notes #${container.id}`));
    id++;
    deleteIconsFunc();
    noteClickFunc();
}

function saveFile(title, data) {
    // console.log(container.id, id);
    if (container.classList.contains("new")) newFileSave(title, data);
    // container.style.display = "none";
    container.classList.remove("active");
    container.classList.remove("new");

    let HTML = `
    <div class="note" id="_${id}">
        <div class="header">
            <h4 class="title">${title}</h4>
            <i class="fa-solid fa-trash"></i>
        </div>
            <p class="show">${data}</p>
            <p class="data">${data}</p>
        </div>
    `;
    document.querySelector(".notes #"+container.id).innerHTML = HTML;
    // console.log(container.id);
    // console.log(document.querySelector(`.notes #${container.id}`));
    id++;
    deleteIconsFunc();
    noteClickFunc();
}

window.addEventListener("load", () => {
    deleteIconsFunc();
    noteClickFunc();
})

function noteClickFunc() {
    let note = document.querySelectorAll(".note");
    note.forEach((elem) => {
        elem.addEventListener("click", () => {
            console.log(containerTitle, containerInput);
            containerInput.innerHTML = elem.querySelector(".data").innerHTML;
            containerTitle.value = elem.querySelector(".header .title").innerHTML;
            // console.log(noteTitle.innerHTML);
            container.classList.add("active");
            container.id = elem.id;
            id++;
        })
    })
}