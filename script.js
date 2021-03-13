// Global Scope ------------------------------------------------------------------------------------------------------------------------------------------
const container = document.querySelector('.container2');
const drawingColor = document.querySelector('#color');
let gridSize = document.querySelector('#range');
let gridBox = Number(gridSize.value);
// Creating Grid -----------------------------------------------------------------------------------------------------------------------------------------
function color(gridBox) {
for (let i=0; i < gridBox * gridBox; i++) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    container.style.gridTemplateColumns = `repeat(${gridBox},1fr)`;
    container.style.gridTemplateRows = `repeat(${gridBox},1fr)`;
    container.appendChild(grid);
    grid.addEventListener('mouseover', ()=> {
        grid.style.backgroundColor = drawingColor.value;
    });
}
}
color(gridBox)
// color(gridBox);
gridSize.addEventListener('change', ()=> {
    color(gridBox);
})