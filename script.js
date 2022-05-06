function grid(elem) {
   const container = document.querySelector('#container');

   //creating grid rows
   for(let i = 0; i < 16; i++) {  
      let row = document.createElement('div') ;
      row.className = 'row';  
      row.style.padding = '1em'

      //creating columns
      for(let x = 0; x < 16; x++) {
         let col = document.createElement('div');
         col.className = 'col';
         col.style.padding = '1em'
         row.appendChild(col);  
      }
      container.appendChild(row);
   }
   elem.appendChild(container)
}
grid(document.body);


