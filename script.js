
function drawGrid(container, row, col) {
   const box = document.createElement('div');
   box.className = 'box';
   box.id = `box${row}${col}`;

   container.appendChild(box);
   return(box);
}

function createBox(container) {
   const grid = document.createElement('div');
   grid.className = 'grid';

   for(let i = 0; i < 16; i++) {
      for(let j = 0; j < 16; j++) {
         drawGrid(grid, i, j);
      }
   }
   container.appendChild(grid);
}

function startUp() {
   const game = document.getElementById('game');
   createBox(game);
}
startUp();



const range = document.querySelector('#grid-size');
const outputRange = document.querySelector('#output')


/*
const clear = document.querySelector('#clear');
clear.addEventListener('click', (element) => {
   
});
*/