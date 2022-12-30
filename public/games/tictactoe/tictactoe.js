var homeContainer = document.getElementsByClassName('homeContainer')[0];

/* make 3 by 3 grid */
var grid = document.createElement('div');
grid.style.width = '300px';
grid.style.height = '300px';
grid.style.border = '1px solid black';
grid.style.display = 'grid';
grid.style.gridTemplateColumns = '1fr 1fr 1fr';
grid.style.gridTemplateRows = '1fr 1fr 1fr';
for (var i = 0; i < 9; i++) {
  var cell = document.createElement('div');
  cell.style.border = '1px solid black';
  cell.style.backgroundColor = 'white';
  cell.style.textAlign = 'center';
  cell.style.fontSize = '50px';
  cell.innerHTML = '&nbsp;';
  grid.appendChild(cell);
}
homeContainer.appendChild(grid);
/* when I click in a cell in the grid, fill that cell with X or O alternating between them */
var xTurn = true;
grid.addEventListener('click', function(event) {
  if (event.target.tagName === 'DIV') {
    if (event.target.innerHTML === '&nbsp;') {
      if (xTurn) {
        event.target.innerHTML = 'X';
      } else {
        event.target.innerHTML = 'O';
      }
      xTurn = !xTurn;
    }
  }
});
/* add a button with label "reset" which clears all letters from all the cells of the grid */
var resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset';
resetButton.addEventListener('click', function() {
  for (var i = 0; i < grid.children.length; i++) {
    grid.children[i].innerHTML = '&nbsp;';
  }
});
homeContainer.appendChild(resetButton);
/* when a diagonal, row or column in the grid is filled with the same letters, display text that the player using that letter wins */
var checkForWin = function() {
  var cells = grid.children;
  var winningText = document.createElement('div');
  winningText.style.fontSize = '50px';
  winningText.style.textAlign = 'center';
  if (cells[0].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[8].innerHTML && cells[0].innerHTML !== '&nbsp;') {
    winningText.innerHTML = cells[0].innerHTML + ' wins!';
    homeContainer.appendChild(winningText);
  } else if (cells[2].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[6].innerHTML && cells[2].innerHTML !== '&nbsp;') {
    winningText.innerHTML = cells[2].innerHTML + ' wins!';
    homeContainer.appendChild(winningText);
  } else if (cells[0].innerHTML === cells[1].innerHTML && cells[1].innerHTML === cells[2].innerHTML && cells[0].innerHTML !== '&nbsp;') {
    winningText.innerHTML = cells[0].innerHTML + ' wins!';
    homeContainer.appendChild(winningText);
  } else if (cells[3].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[5].innerHTML && cells[3].innerHTML !== '&nbsp;') {
    winningText.innerHTML = cells[3].innerHTML + ' wins!';
    homeContainer.appendChild(winningText);
  } else if (cells[6].innerHTML === cells[7].innerHTML && cells[7].innerHTML === cells[8].innerHTML && cells[6].innerHTML !== '&nbsp;') {
    winningText.innerHTML = cells[6].innerHTML + ' wins!';
    homeContainer.appendChild(winningText);
  } else if (cells[0].innerHTML === cells[3].innerHTML && cells[3].innerHTML === cells[6].innerHTML && cells[0].innerHTML !== '&nbsp;') {
    winningText.innerHTML = cells[0].innerHTML + ' wins!';
    homeContainer.appendChild(winningText);
  } else if (cells[1].innerHTML === cells[4].innerHTML && cells[4].innerHTML === cells[7].innerHTML && cells[1].innerHTML !== '&nbsp;') {
    winningText.innerHTML = cells[1].innerHTML + ' wins!';
    homeContainer.appendChild(winningText);
  } else if (cells[2].innerHTML === cells[5].innerHTML && cells[5].innerHTML === cells[8].innerHTML && cells[2].innerHTML !== '&nbsp;') {
    winningText.innerHTML = cells[2].innerHTML + ' wins!';
    homeContainer.appendChild(winningText);
  }
};
grid.addEventListener('click', checkForWin);
/* when I lick on the reset button, clear the delete text */
resetButton.addEventListener('click', function() {
  if (document.body.lastChild.tagName === 'DIV') {
    document.body.removeChild(document.body.lastChild);
  }
});
/* make the UI mobile responsive */
var resize = function() {
  if (window.innerWidth < window.innerHeight) {
    grid.style.width = '100%';
    grid.style.height = '100%';
    grid.style.gridTemplateColumns = '1fr 1fr 1fr';
    grid.style.gridTemplateRows = '1fr 1fr 1fr';
  } else {
    grid.style.width = '300px';
    grid.style.height = '300px';
    grid.style.gridTemplateColumns = '1fr 1fr 1fr';
    grid.style.gridTemplateRows = '1fr 1fr 1fr';
  }
};
window.addEventListener('resize', resize);
resize();
/* Style the reset button and add some margin from the grid */
resetButton.style.margin = '10px';
resetButton.style.fontSize = '20px';
resetButton.style.padding = '10px';
resetButton.style.borderRadius = '5px';
resetButton.style.backgroundColor = '#00bfff';
resetButton.style.border = 'none';
resetButton.style.color = 'white';