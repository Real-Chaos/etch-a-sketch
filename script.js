// Global Scope ------------------------------------------------------------------------------------------------------------------------------------------
const html = document.querySelector('html');
const body = document.querySelector('body')
const container = document.querySelector('.container2');
const drawingColor = document.querySelector('#color');
const bgColor = document.querySelector('.bg-color')
let gridSize = document.querySelector('#range');
const borderColor = document.querySelector('.borderColor');
const rainbowToggle = document.querySelector('.rainbow');
let rainbowOn = true;
// Creating Grid -----------------------------------------------------------------------------------------------------------------------------------------
function creatingGrid(gridBox) {
for (let i=0; i < gridBox * gridBox; i++) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    container.style.gridTemplateColumns = `repeat(${gridBox},1fr)`;
    container.style.gridTemplateRows = `repeat(${gridBox},1fr)`;
    container.appendChild(grid);
    grid.addEventListener('mouseover', ()=> {
        grid.style.backgroundColor = drawingColor.value;
    });
    bgColor.addEventListener('input', ()=> {
        grid.style.backgroundColor = bgColor.value;
    });
    borderColor.addEventListener('input',()=> {
        grid.style.border = `2px solid ${borderColor.value}`
    });
    rainbowToggle.addEventListener('click', ()=> {
       if(rainbowOn) {
           rainbowOn = false;
       }
       else {
           rainbowOn = true;
       }
    });
    grid.addEventListener('mouseover', ()=> {
        if (rainbowOn) {
            grid.style.backgroundColor = rainbow();
        }
        else {
            grid.style.backgroundColor = drawingColor.value;
        }
    });

    }
}
creatingGrid(gridSize.value);

// Changing Grid Size -------------------------------------------------------------------------------------------------------------------------------------
function clear() {
    const clearGrid = Array.from(container.childNodes);
    clearGrid.forEach(gridItems => {
      container.removeChild(gridItems);
    });
  }
gridSize.addEventListener('change', ()=> {
    clear();
    creatingGrid(gridSize.value);
    let gridSizeIndicator = document.querySelector('.gridSizeIndicator');
    gridSizeIndicator.textContent = `${gridSize.value} x ${gridSize.value}` 
})
// Cursor --------------------------------------------------------------------------------------------------------------------------------------
const cursor = document.querySelector('.cursor')
const cursorChange = Array.from(cursor.childNodes);
function changeCursor() {
    cursorChange[1].addEventListener('click', ()=> {
        html.style.cursor = 'url(\'images/cursor1.png\'), pointer';
    });
    cursorChange[3].addEventListener('click', ()=> {
        html.style.cursor = 'url(\'images/cursor2.png\'), pointer';
    });
    cursorChange[5].addEventListener('click', ()=> {
        html.style.cursor = 'url(\'images/cursor3.png\'), pointer';
    });
    cursorChange[7].addEventListener('click', ()=> {
        html.style.cursor = 'url(\'images/cursor4.png\'), pointer';
    });
    cursorChange[9].addEventListener('click', ()=> {
        html.style.cursor = 'url(\'images/cursor5.png\'), pointer';
    });
    cursorChange[11].addEventListener('click', ()=> {
        html.style.cursor = 'url(\'images/cursor6.png\'), pointer';
    });
}
changeCursor();
// Theme -----------------------------------------------------------------------------------------------------------------------------------------------
const theme = document.querySelector('.theme');
const themeSelection = Array.from(theme.childNodes);
const light = document.querySelector('#light')
const dark = document.querySelector('#dark')
function themeChange() {
    themeSelection[1].addEventListener('click', ()=> {
        body.style.background = 'url(\'images/theme1.jpg\') no-repeat'
    });
    themeSelection[3].addEventListener('click', ()=> {
        body.style.background = 'url(\'images/theme2.jpg\') no-repeat'
    });
    themeSelection[5].addEventListener('click', ()=> {
        body.style.background = 'url(\'images/theme3.jpg\') no-repeat'
    });
    light.addEventListener('input', ()=> {
        body.style.background = '#FFFFFF';
    })
    dark.addEventListener('input', ()=> {
        body.style.background = '#2C2F33';
    });
}
themeChange();
function ok() {
    if(body.style.background === '#FFFFFF') {
        light.checked = true;
    }
    else {
        light.checked = false;
    }
}
ok()
// Rainbow----------------------------------------------------------------------------------------------------------------------------------------------------
function rainbow() {
    const red = Math.floor((Math.random() * 256) + 1);
    const green = Math.floor((Math.random() * 256) + 1);
    const black = Math.floor((Math.random() * 256) + 1);
    const rainbowBg = `rgb(${Number(red)}, ${Number(green)}, ${Number(black)})`;
    return rainbowBg
}
