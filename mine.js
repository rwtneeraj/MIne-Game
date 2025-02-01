const TOTAL_ROWS = 6;
const TOTAL_COLUMNS = 6;
const WIN_MSG = "YOU WON !!";
const LOSE_MSG = "\n you Got mine 💣💣💣!!! better luck next time... ";


const createMineGrid = (currentRow, currentCol) => {
  let mineGrid = "";

  for (let row = 1; row <= TOTAL_ROWS; row++) {
    for (let column = 1; column <= TOTAL_COLUMNS; column++) {
      if (row === 1 && column === 1) {
        mineGrid += "🇮🇳 ";
      }

      mineGrid += row === currentRow && column === currentCol ? "👨🏻‍🎓" : "🟩";
    }

    mineGrid += "\n";
  }

  return mineGrid;
};

const makeControl = (currentRow, currentCol) => {
  const userChoice = prompt("\npress W / A /S / D for move ....  :  \n");

  switch (userChoice) {
    case "W":
      currentRow = currentRow - 1;
      return [currentRow, currentCol];

    case "S":
      currentRow = currentRow + 1;
      return [currentRow, currentCol];

    case "D":
      currentCol = currentCol + 1;
      return [currentRow, currentCol];

    case "A":
      currentCol = currentCol - 1;
      return [currentRow, currentCol];
    
    default:
      return [currentRow, currentCol];
  }
};

const isPathSafe = (currentRow, currentCol) => {
  const path = "56 46 45 44 34 33 32 31 21 11";
  const data = "" + currentRow + currentCol;

  for (let index = 0; index < path.length; index = index + 3) {
    if (data === path[index] + path[index + 1]) {
      return true;
    }
  }

  return false;
};

const printMineGrid = (currentRow, currentCol) => {
  console.log(createMineGrid(currentRow, currentCol));
};

const isUserWin = (currentRow, currentCol) => {
  return currentRow === 1 && currentCol === 1;
};  

const gameExecute = (row, col) => {
  const [currentRow, currentCol] = makeControl(row, col);

  if (isUserWin(currentRow, currentCol)) {
    printMineGrid(currentRow, currentCol);
    return WIN_MSG;
  }

  if (isPathSafe(currentRow, currentCol)) {
    printMineGrid(currentRow, currentCol);
    return gameExecute(currentRow, currentCol);
  }

  return LOSE_MSG;
};

const basicHelp = () => {
  let message = "\npress W for ⬆️ UP..";
  message += "\npress S for ⬇️ DOWN..";
  message += "\npress A for ⬅️ LEFT..";
  message += "\npress D for ➔ RIGHT..";

  return message;
};

const wantToPlay = () => {
  const choice = confirm("\nwould you like to play..");
  return choice;
};

const main = () => {
  console.log("\nthis is mine game....");

  if (wantToPlay()) {
    console.log(createMineGrid());
    console.log(basicHelp());
    console.log(gameExecute(6, 6));
  }

  console.log("\nGame End....");
};

main();
