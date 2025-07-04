const container = document.querySelector(".container");
const header = document.querySelector(".header");
const popUpBtn = document.createElement("button");
popUpBtn.textContent = "Click to enter number of squares";
let noOfSquares;
header.appendChild(popUpBtn);
popUpBtn.addEventListener("click", () => {
    noOfSquares = prompt("Enter number of squares per side:");
    const length = 500/noOfSquares;
    for (let i=1; i<=noOfSquares; i++){
        let rowBox = document.createElement("div");
        rowBox.setAttribute("style", `display: flex; flex-direction: row; height: ${length}px; width: 500px;`);
        container.appendChild(rowBox);
        for (let j=1; j<=noOfSquares; j++){
            let columnBox = document.createElement("div");
            columnBox.setAttribute("style", `height: ${length}px; width: ${length}px;`);
            columnBox.classList.add("box");
            rowBox.appendChild(columnBox);
        }
    }
});
container.setAttribute("style", "display: flex; flex-direction: column; height: 500px; width: 500px; background-color: white;");

