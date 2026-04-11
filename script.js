const container = document.getElementById("container");
let num = 4;
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

const btn = document.querySelector("button");
btn.addEventListener("click",() => {
    let userInput = prompt("enter a number between 1 and 100:",4);
    if (userInput >=1 && userInput <= 100){
        while (container.firstChild){
            container.removeChild(container.firstChild);
        }
        for(let x = 0; x < userInput; x++){
            const row = document.createElement("div"); 
            row.classList.add("row");
            for(let j = 0; j < userInput; j++){
                const column = document.createElement("div");
                column.classList.add("column");
                row.appendChild(column);
            }
            container.appendChild(row);
        }
    } else {
        alert("please enter a valid number.");
    }
    
})


