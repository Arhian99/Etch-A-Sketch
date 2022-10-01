let containers = document.getElementsByClassName('container');
let container = containers[0];
let submitBtn = document.getElementById('submit');
let sizeInput;
let sizeInputSqrd;

/*
if (sizeInput === undefined) {
    for (let i = 0; i < 256; i++) {
        newDiv = document.createElement('div');
        container.appendChild(newDiv);
    }
}

else if (sizeInput > 0) {

}
*/

for (let i = 0; i < 256; i++) {
    newDiv = document.createElement('div');
    newDiv.setAttribute('id', `${i}`)
    container.appendChild(newDiv);
}



/*
function setSize() {
    for (let i = 0; i < 256; i++) {
        deleteDiv = document.getElementById(`${i}`);
        container.removeChild(deleteDiv);
    } // find a way to delete only the right number of divs, or run this loop only once at the beginning when youre deleting the default grid

    sizeInput = document.getElementById('grid-size').value;
    sizeInputSqrd = sizeInput * sizeInput;

    for (let i = 0; i < sizeInputSqrd; i++) {
        newDiv = document.createElement('div');
        newDiv.setAttribute('id', `${i}`);
        container.appendChild(newDiv);
    }

    container.style.gridTemplateColumns = `repeat(${sizeInput}, 1fr)`;
}
*/

function setSize() {
    let lastId = parseInt(container.lastElementChild.id, 10) + 1; // the id property returns a string, might concatenate with the plus

    for (let i = 0; i < lastId; i++) {
        container.removeChild(document.getElementById(`${i}`));
    } // find a way to delete only the right number of divs, or run this loop only once at the beginning when youre deleting the default grid

    sizeInput = document.getElementById('grid-size').value;
    sizeInputSqrd = sizeInput * sizeInput;

    for (let i = 0; i < sizeInputSqrd; i++) {
        newDiv = document.createElement('div');
        newDiv.setAttribute('id', `${i}`);
        container.appendChild(newDiv);
    }

    container.style.gridTemplateColumns = `repeat(${sizeInput}, 1fr)`;

}



