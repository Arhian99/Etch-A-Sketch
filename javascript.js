let containers = document.getElementsByClassName('container');
let container = containers[0];
let submitBtn = document.getElementById('submit');
let sizeInput;
let sizeInputSqrd;
let randomColor = Math.floor(Math.random()*16777215).toString(16);


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
    newDiv.setAttribute('class', 'children')
    container.appendChild(newDiv);
}

children = container.getElementsByClassName('children');
for (let element of children) {
    element.addEventListener('mouseover', () => element.style.backgroundColor = '#' + randomColor)
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
    let lastId = container.getElementsByClassName('children'); // the id property returns a string, might concatenate with the plus
    
    for (let i = 0; lastId.length > 0; i++) {
        let element = lastId[0];
        container.removeChild(element);
    }

    // find a way to delete only the right number of divs, or run this loop only once at the beginning when youre deleting the default grid

    sizeInput = document.getElementById('grid-size').value;
    sizeInputSqrd = sizeInput * sizeInput;

    for (let i = 0; i < sizeInputSqrd; i++) {
        newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'children');
        container.appendChild(newDiv);
    }

    container.style.gridTemplateColumns = `repeat(${sizeInput}, 1fr)`;

    children = container.getElementsByClassName('children');
    for (let element of children) {
        element.addEventListener('mouseover', () => element.style.backgroundColor = '#' + randomColor)
    }

}





