const container = document.getElementById("container");
const btn = document.querySelector("button");

createGrid(16);
function createGrid(size){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    for(let x = 0; x < size; x++){
        const row = document.createElement("div"); 
        row.classList.add("row");
        for(let j = 0; j < size; j++){
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
        container.appendChild(row);
    }
}


container.addEventListener("mouseover",(e) => {
    if (e.target.classList.contains("column")){
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
    
});


btn.addEventListener("click",() => {
    let userInput = prompt("Enter a number (1-100):",16);
    let val = parseInt(userInput);
    if (val >=1 && val <= 100){
        createGrid(val);
    } else {
        alert("please enter a valid number.");
    }
    
});


