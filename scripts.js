const container = document.querySelector(".container");
const divs = document.querySelectorAll(".column");

// click eventlistener and trigger for resetting grid
let amount = document
  .getElementById("amount")
  .addEventListener("click", function () {
    resetGrid();
  });

// make eventlistener for erase-button, that triggers erase function


// makes grid, default size 10 squares each side.
function makeGrid(numDivs = 10) {
  //removes existing grid if making new.
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  // loops to set rows and columns
  for (let i = 0; i < numDivs; i++) {
    let rows = document.createElement("div");
    rows.classList.add("rows");
    container.appendChild(rows);
    for (let c = 0; c < numDivs; c++) {
      let column = document.createElement("div");
      column.classList.add("column");
      rows.appendChild(column);
    }
  }
  // makes drawing possible by changing bg-color of squares when hovered
  const divs = document.querySelectorAll(".column");
  divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.setAttribute("style", "color: blue; background: white;");
    });
  });
}

// calls function to create default grid when page first opens
makeGrid();

// reset grid, create new one with size defined by prompt
function resetGrid() {
  makeGrid(0);
  let rows = 0;
  while (isNaN(rows) || rows > 100 || rows < 1) {
    rows = prompt(
      "How many rows/columns do you want the grid? (e.g. entering 10 will result in a 10x10 grid)"
    );
  }

  makeGrid(rows);

  document.getElementById("eraser").addEventListener("click", function () {
    erase();
  });

  // erase function that colors squares back to base color.
  function erase() {
    const divs = document.querySelectorAll(".column");
    divs.forEach((div) => {
      div.addEventListener("mouseover", () => {
        div.setAttribute("style", "color: blue; background: rgb(60, 255, 0);");
      });
    });
  }
}

