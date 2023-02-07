const page1 = ("https://swapi.dev/api/planets/?page=1")
const page2 = ("https://swapi.dev/api/planets/?page=2")
const table = document.querySelector(".table");
const showTable = document.querySelector(".show");
const next = document.querySelector(".btn-next");
let previous = document.querySelector(".previous")


const fetchApi1 = () => {
fetch(page1)
.then(res => res.json())
.then(function (data) {
    generateTable(data)
    console.log(data);
})
}
const fetchApi2 = () => {
    fetch(page2)
    .then(res => res.json())
    .then(function (data) {
        generateTable(data)
        console.log(data);
    })
}


const generateTable = tableDetails => {
    let tableHTML = ""
    for(let el of tableDetails.results) {
        tableHTML += `
        
        <tr>
            <td class="name">${el.name}</td>
            <td class="population">${el.population}</td>
            <td class="climate">${el.climate}</td>
            <td class="gravity">${el.gravity}</td>
        </tr>`
    }
    table.innerHTML += tableHTML;
    
}

showTable.addEventListener("click" ,() => {
    showTable.innerHTML = ""
    
    fetchApi1()

})

next.addEventListener("click", () =>{
    fetchApi2();
    table.innerHTML = ` 
    <table class="table" border="1">
        <thead>
            <th>Planet Name </th>
            <th>Population</th>
            <th>Climate</th>
            <th>Gravity</th>
        </thead>
    </table>`;

   
    showTable.innerHTML = ""
    next.innerHTML = "";
    
    
})


    previous.addEventListener("click", () => {
    previous.innerHTML = ""
    table.innerHTML = ` 
    <table class="table" border="1">
        <thead>
            <th>Planet Name </th>
            <th>Population</th>
            <th>Climate</th>
            <th>Gravity</th>
        </thead>
    </table>`
    
    fetchApi1()
})
