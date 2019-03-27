// Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

// The number of times that the cube is cut in each dimension --> the argument 'cuts'.

// To solve the puzzle you must create a function that returns an integer representing the total number of small cubes with at least one red side.

// Examples:
// countSquares(2) --> 26
// countSquares(4) --> 98

const countSquares = (cuts) => {
    const middle = ((cuts + 1)*(cuts+1)-((cuts)*(4)))*6
    const corners = (8)
    const edges = ((cuts - 1)*2)*6

    return cuts===0 ? 1 : (middle + corners + edges)
}

// best answer

let countSquares = c => c ? 6 * c * c + 2 : 1;



