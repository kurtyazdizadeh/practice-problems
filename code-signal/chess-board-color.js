function chessBoardCellColor(cell1, cell2) {
  //dark === two simliar values added
  //light === one odd/one even value added

  const checkColor = cell => {
    if (cell.charCodeAt(0) % 2 === parseInt(cell[1] % 2)) {
      return 'dark';
    } else {
      return 'light';
    }
  }
  return (checkColor(cell1) === checkColor(cell2));
}
