"use strict";
function drawGrid(container, row, col) {
   const box = document.querySelector('div');
   box.className = 'box';
   box.id = `box${row}${col}`;

   container.appendChild(box);
   return(box);
}

function createBox() {
   const grid = document.createElement('div');
   grid.className = 'grid';

   for(let i = 0; i < 16; i ++) {
      
   }
}



/*
for(let i = 0; i < 16; i++) {  
      for(let j = 0; j < 16; x++) {
         
      }
      
   }
   */



const gridButton = document.querySelector('#grid-range');
gridButton.addEventListener('click', (element) => {
   element = prompt('enter grid size')
});