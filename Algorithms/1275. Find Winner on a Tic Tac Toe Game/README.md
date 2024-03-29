# [1275. Find Winner on a Tic Tac Toe Game](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/)

Tic-tac-toe is played by two players _A_ and _B_ on a _3 x 3_ grid.

Here are the rules of Tic-Tac-Toe:

-   Players take turns placing characters into empty squares (" ").
-   The first player A always places "X" characters, while the second player B always places "O" characters.
-   "X" and "O" characters are always placed into empty squares, never on filled ones.
-   The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
-   The game also ends if all squares are non-empty.
-   No more moves can be played if the game is over.

Given an array `moves` where each element is another array of size 2 corresponding to the row and column of the grid where they mark their respective character in the order in which _A_ and _B_ play.

Return the winner of the game if it exists (_A_ or _B_), in case the game ends in a draw return "Draw", if there are still movements to play return "Pending".

You can assume that `moves` is **valid** (It follows the rules of Tic-Tac-Toe), the grid is initially empty and _A_ will play **first**.

**Example 1:**

    Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
    Output: "A"
    Explanation: "A" wins, he always plays first.
    "X  "    "X  "    "X  "    "X  "    "X  "
    "   " -> "   " -> " X " -> " X " -> " X "
    "   "    "O  "    "O  "    "OO "    "OOX"

**Example 2:**

    Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
    Output: "B"
    Explanation: "B" wins.
    "X  "    "X  "    "XX "    "XXO"    "XXO"    "XXO"
    "   " -> " O " -> " O " -> " O " -> "XO " -> "XO "
    "   "    "   "    "   "    "   "    "   "    "O  "

**Example 3:**

    Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
    Output: "Draw"
    Explanation: The game ends in a draw since there are no moves to make.
    "XXO"
    "OOX"
    "XOX"

**Example 4:**

    Input: moves = [[0,0],[1,1]]
    Output: "Pending"
    Explanation: The game has not finished yet.
    "X  "
    " O "
    "   "

**Constraints:**

-   `1 <= moves.length <= 9`
-   `moves[i].length == 2`
-   `0 <= moves[i][j] <= 2`
-   There are no repeated elements on `moves`.
-   `moves` follow the rules of tic tac toe.

**Hint 1:**

It's straightforward to check if A or B won or not, check for each row/column/diag if all the three are the same.

**Hint 2:**

Then if no one wins, the game is a draw iff the board is full, i.e. moves.length = 9 otherwise is pending.
