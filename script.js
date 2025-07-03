const container = document.querySelector(".container");
let n = 16;
const length = 500/n;
container.setAttribute("style", "display: flex; flex-direction: column; height: 500px; width: 500px; background-color: white;");
for (let i=1; i<=n; i++){
    let rowBox = document.createElement("div");
    rowBox.setAttribute("style", `display: flex; flex-direction: row; height: ${length}px; width: 500px;`);
    container.appendChild(rowBox);
    for (let j=1; j<=n; j++){
        let columnBox = document.createElement("div");
        columnBox.setAttribute("style", `height: ${length}px; width: ${length}px;`);
        columnBox.classList.add("box")
        rowBox.appendChild(columnBox);
    }
}