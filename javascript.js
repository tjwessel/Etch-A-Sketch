const screen = document.querySelector('#screen');
let mouseDown = false
screen.addEventListener('mousedown', () => mouseDown = true);
document.addEventListener('mouseup', () => mouseDown = false);


function makeBoxes (number) {
    for (i = 0; i < number; i++) {
        const newBox = document.createElement('div');
        newBox.classList.add('box');
        screen.appendChild(newBox);
    }
}

makeBoxes(256);

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('mouseover', () => {
 if (mouseDown) box.classList.add('black');   
}));

