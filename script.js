function grid(elem) {
   const container = document.querySelector('#container');

   //creating grid rows
   for(i = 0; i < 16; i+=1) {  
      let row = document.createElement('div') ;
      row.className = "row";
      row.id = "row" + i;
   }

}


