const container = document.getElementById("container");
const num = 4;
for(let x = 0; x < num; x++){
    const row = document.createElement("div"); 
    row.classList.add("row");
    for(let j = 0; j < num; j++){
        const column = document.createElement("div");
        column.classList.add("column");
        row.appendChild(column);
    }
    container.appendChild(row);
}

container.addEventListener("mouseover",(e) => {
    e.target.style.backgroundColor = "black";
})

