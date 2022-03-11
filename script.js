const ctner = document.querySelector('.container');
const reset = document.querySelector('#reset');
let x = 16;

function generateGrid() {
    while (ctner.hasChildNodes()) {
        ctner.removeChild(ctner.firstChild);
    }

    let xS = x * x;
    for (let i = 0; i < xS; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', () => div.classList.toggle('draw'));
        ctner.appendChild(div);
    }

    ctner.style.gridTemplate = (`repeat(${x}, 1fr) / repeat(${x}, 1fr)`);
}

reset.addEventListener('click', () => {
    x = prompt('give me a number');
    x > 32 ? x = prompt('Number higher than 32 is not allowed') : '';
    generateGrid();
})

generateGrid();