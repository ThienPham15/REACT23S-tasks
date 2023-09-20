# Five in a Row

A basic Five in a Row game, which needs some additions to work.

The first player to get five stones of their own kind in a row (horizontally, vertically or diagonally) wins.

For more information about the game see https://en.wikipedia.org/wiki/M,n,k-game

## Task 1

Marked as `// TODO: Task 1` in `game.js`.

Initialize the game board to be an array of five arrays. Each of the "inner" arrays should contain five empty strings. Use the variable dimensions instead of hard coding the number five.

Hint: Similar code, but not exactly same, is needed for creating the board elements visible in the HTML. That code is already implemented.

## Task 2

Implement "infinite" board version of the game, where the board expands when a player plays next to the current board limits.

### Part A

Marked as `// TODO: Task 2 A` in `game.js`.

Remove comment block around the if-else code blocks and implement the checks if the player has just played next to the current board limists. Ie if the clicked square is on the top or bottow row or the leftmost or rightmost column.

### Part B

Marked as `// TODO: Task 2 B` in `game.js`.

Implement the function to add a column or row to the board as needed. There is already a call to redraw it afterwards.

## Task 3 (Hard!)

Marked as `// TODO: Task 3` in `game.js`.

Implement the marked function to check if the current player has won the game. If they have won remove hidden class from the winner announcement below the board.

## Task 4 (optional)

Not marked in the code.

Once a player wins remove the hidden class from the new game button. Add an event listener to the button, which will reinitialize the game to original settings and hide the button again.

## Task 5 (optional)

Add more styling to the game.

## Task 6 (optional)

Are there other ways to improve the game? Implement those.