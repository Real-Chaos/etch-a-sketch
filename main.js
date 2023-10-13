let mode = 'color'
const grid = document.querySelector('.grid')
const gridOptions = document.querySelectorAll('.grid-options button')
const gridSize = document.querySelector('.grid-size')
const sizeIndicator = document.querySelector('.size-indicator')
const colorSelected = document.querySelector('.color-selected')
const clearGridButton = document.querySelector('.clear-grid')

const handlingModes = () => {
  gridOptions.forEach((option) => {
    option.addEventListener('click', (e) => {
      gridOptions.forEach((op) => {
        op.style.backgroundColor = 'transparent'
        op.style.color = '#333'
      })
      e.target.style.color = 'white'
      e.target.style.backgroundColor = '#333'
      mode = e.target.className
    })
  })
}

const colorMode = (e) => {
  e.target.style.backgroundColor = colorSelected.value
}

const randomMode = (e) => {
  const arrayOfColorFunctions = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ]
  let randomColor = '#'

  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 16)
    let value = arrayOfColorFunctions[index]

    randomColor += value
  }

  e.target.style.backgroundColor = randomColor
}

const eraser = (e)=> {
  e.target.style.backgroundColor = 'white'
}

const clearGrid = () => {
  const gridDivs = document.querySelectorAll('.grid div')
  gridDivs.forEach(div => {
    div.style.backgroundColor = 'white'
  })
}

const handleGridFunctionality = () => {
  const gridDivs = document.querySelectorAll('.grid div')
  gridDivs.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
      if (mode === 'color') {
        colorMode(e)
      } else if(mode === 'random') {
        randomMode(e)
      } else if(mode === 'eraser') {
        eraser(e)
      }
    })
  })
  clearGridButton.addEventListener('click', clearGrid)
}


gridSize.addEventListener('input', () => {
  sizeIndicator.textContent = `${gridSize.value} x ${gridSize.value}`
  createGrid()
  handleGridFunctionality()
})

const createGrid = () => {
  grid.innerHTML = ''
  sizeIndicator.textContent = `${gridSize.value} x ${gridSize.value}`
  if (grid.innerHTML === '') {
    for (let i = 0; i <= gridSize.value * gridSize.value; i++) {
      const div = document.createElement('div')
      grid.style.gridTemplateColumns = `repeat(${gridSize.value}, 1fr)`
      grid.style.gridTemplateRows = `repeat(${gridSize.value}, 1fr)`
      grid.appendChild(div)
    }
  }
}
handlingModes()
createGrid()
handleGridFunctionality()

