const container = document.querySelector(".container");

let amount = document
  .getElementById("amount")
  .addEventListener("click", function () {
    resetGrid();
  });

function makeGrid(numDivs = 10) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

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

  const divs = document.querySelectorAll(".column");
  divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.setAttribute("style", "color: blue; background: white;");
    });
  });
}
makeGrid();


function resetGrid() {
  makeGrid(0);
  let rows = 0;
  while (isNaN(rows) || rows > 100 || rows < 1) {
    rows = prompt(
      "How many rows/columns do you want the grid? (e.g. entering 10 will result in a 10x10 grid)"
    );
  }
  
  makeGrid(rows);
  

  // for  (let i=0; i<squares.length; i++) {
  //     squares[i].style.background = 'white';
  //     squares[i].addEventListener('mouseenter', function() {
  //         squares[i].style.background = 'black';});
  // }
}
