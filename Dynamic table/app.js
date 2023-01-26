let p = document.getElementById("paragraph");
let myTable = document.getElementById("myTable");
function createTable() {
    let row = prompt("Input number of rows");
    let column = prompt("Input number of columns");
   
 for(let r = 0; r < parseInt(row,10); r++){
   let rows = myTable.insertRow(r);

   for(let c = 0; c < parseInt(column,10); c++)  {
     let columns =  rows.insertCell(c);
     columns.innerHTML = "Row-" + r + " Column-" + c; 
    }

} 
    if (isNaN(row)){
        p.innerHTML = `Please enter number`
    }

}

createTable()