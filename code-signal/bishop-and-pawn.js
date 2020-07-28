// Given the positions of a white bishop and a black pawn on the standard chess board,
// determine whether the bishop can capture the pawn in one move.

function bishopAndPawn(bishop, pawn) {
  if (bishop[0] === pawn[0]) return false;

  const xDistance = Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0));
  const yDistance = Math.abs(parseInt(bishop[1] - parseInt(pawn[1])));

  return (xDistance === yDistance);
}
