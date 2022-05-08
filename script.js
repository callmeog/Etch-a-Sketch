"use strict";
function grid(elem) {
   const container = document.querySelector('#container');

   //creating grid rows
   for(let i = 0; i < 16; i++) {  
      let row = document.createElement('div') ;
      row.className = 'row';

      //creating columns
      for(let x = 0; x < 16; x++) {
         let col = document.createElement('div');
         col.className = 'col';
         row.appendChild(col);  
      }
      container.appendChild(row);
   }
   elem.appendChild(container)
   container.style.cssText = 'width: 40%; margin: auto';
}
grid(document.body);


const gridButton = document.querySelector('#container');

gridButton.addEventListener('click', (element) => {

});