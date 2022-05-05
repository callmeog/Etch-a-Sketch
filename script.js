function grid(elem) {
   const container = document.querySelector('#container');

   //creating grid rows
   for(let i = 0; i < 16; i+=1) {  
      let row = document.createElement('div') ;
      row.className = "row";
      row.id = "row" + i;

      //creating columns
      for(let x = 0; x < 16; x+=1) {
         let col = document.createElement('div');
         col.className = 'col';
         row.appendChild(col);
      }
      container.appendChild(row);
   }
   elem.appendChild(container)
}
grid(document.body);

