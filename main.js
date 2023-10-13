let mode = 'color'
const grid = document.querySelector('.grid')
const gridOptions = document.querySelectorAll('.grid-options button')
const gridSize = document.querySelector('.grid-size')
const sizeIndicator = document.querySelector('.size-indicator')
const colorSelected = document.querySelector('.color-selected')

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

const colorMode = () => {
  if (mode === 'color') {
    colorSelected.addEventListener('change', (e) => {})
  }
}

const createGrid = () => {
  grid.innerHTML = ''
  sizeIndicator.textContent = `${gridSize.value} x ${gridSize.value}`
  gridSize.addEventListener('input', () => {
    sizeIndicator.textContent = `${gridSize.value} x ${gridSize.value}`
    createGrid()
  })
  if (grid.innerHTML === '') {
    for (let i = 0; i <= gridSize.value * gridSize.value; i++) {
      const div = document.createElement('div')
      grid.style.gridTemplateColumns = `repeat(${gridSize.value}, 1fr)`
      grid.style.gridTemplateRows = `repeat(${gridSize.value}, 1fr)`
      grid.appendChild(div)
      console.log(div)
    }
  }
}

colorMode()
handlingModes()
createGrid()

