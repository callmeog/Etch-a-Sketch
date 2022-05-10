
const color = document.querySelector('.color-pallet');
function drawGrid(container, row, col) {
   const box = document.createElement('div');
   box.className = 'box';
   box.id = `box${row}${col}`;
   
   //change background color when mouse hovers
   box.addEventListener('mouseenter', () => {
         box.style.backgroundColor = color.value;
      })

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
const output = document.querySelector('#output');
output.innerHTML = range.value;

//Update slider value when it's increased
range.oninput = function() {
   output.innerHTML = this.value;
}



/*
const clear = document.querySelector('#clear');
clear.addEventListener('click', (element) => {
   
});
*/