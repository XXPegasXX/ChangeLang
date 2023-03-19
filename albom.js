function addNewTile(){
    const imageSrc = document.getElementById("imageInput").value;
    const label = document.getElementById("labelInput").value;
    const tile = createTile(imageSrc, label);
    const mainSheet = document.getElementById("mainSheet");
    mainSheet.appendChild(tile);
/*
    const TileDescription = document.getElementById("tile").value;
    const taskList = document.getElementById("taskList");
    let newTask = document.createElement("li");
    newTask.id = counterId++;
    newTask.innerHTML = newTaskDescription+`<button onclick="deleteTask(event)">Удалить</button>`;
    taskList.appendChild(newTask);*/
}

function createTile (imageSrc, label) {
    const tile = document.createElement("div");
    tile.className = "tile";
    const newImage = createImage(imageSrc);
    tile.appendChild(newImage);
    const description = createDescription(label);
    console.log(description);
    tile.appendChild(description);
    return tile;
    
}
function createImage (imageSrc){
    let newImage = document.createElement("img");
    newImage.className = "tileImage";
    newImage.src = imageSrc;
    return newImage;
}

function createDescription(label) {
    let newDescription = document.createElement("div");
    const header = createHeader(label);
    newDescription.appendChild(header);
    const Button = createButton();
    newDescription.appendChild(Button);
    return newDescription;
}

function createButton() {
    let newButton = document.createElement("button");
    newButton.textContent = "Удалить";
    newButton.addEventListener('click', deleteTile);
    return newButton;
}

function createHeader(label) {
    let newlabel = document.createElement("h3");
    newlabel.textContent = label;
    console.log(label);
    return newlabel;
}
 function deleteTile (event){
    event.target.closest('.tile').remove();
 }