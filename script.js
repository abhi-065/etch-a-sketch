function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const container = document.querySelector(".container");
const header = document.querySelector(".header");
const buttons = document.createElement("div");
buttons.classList.add("buttons");
header.appendChild(buttons);
const popUpBtn = document.createElement("button");
popUpBtn.classList.add("pop");
popUpBtn.textContent = "Enter No.of Squares";
const clearBtn = document.createElement("button");
clearBtn.classList.add("clear");
clearBtn.textContent = "Clear the grid";
let noOfSquares;
buttons.appendChild(popUpBtn);
popUpBtn.addEventListener("click", () => {
    noOfSquares = prompt("Enter number of squares per side:");
    if (noOfSquares>=1 && noOfSquares<=100){
        const length = 500/noOfSquares;
        for (let i=1; i<=noOfSquares; i++){
            const rowBox = document.createElement("div");
            rowBox.setAttribute("style", `display: flex; flex-direction: row; height: ${length}px; width: 500px;`);
            container.appendChild(rowBox);
            for (let j=1; j<=noOfSquares; j++){
                const columnBox = document.createElement("div");
                columnBox.setAttribute("style", `height: ${length}px; width: ${length}px;`);
                columnBox.classList.add("box");
                columnBox.addEventListener("mouseover", () => {
                    const r = getRandomInt(0, 255);
                    const g = getRandomInt(0, 255);
                    const b = getRandomInt(0, 255);
                    columnBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                });
                rowBox.appendChild(columnBox);
            }
        }
        popUpBtn.disabled = true;
        buttons.appendChild(clearBtn);
    }
    else {
        alert("Number Should be between 1 and 100!");
    }
});
clearBtn.addEventListener("click", () => {
    container.innerHTML = "";
    clearBtn.remove();
    popUpBtn.disabled = false;
})


