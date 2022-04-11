<?php
class Solution
{

    /**
     * @param Integer[][] $grid
     * @param Integer $k
     * @return Integer[][]
     */
    function shiftGrid($grid, $k)
    {
        $numRows = count($grid);
        $numCols = count($grid[0]);
        $newGrid = array_fill(0, $numRows, array_fill(0, $numCols, 0));

        for ($row = 0; $row < $numRows; $row++) {
            for ($col = 0; $col < $numCols; $col++) {
                $newCol = ($col + $k) % $numCols;
                $newRow = ($row + floor(($col + $k) / $numCols)) % $numRows;
                $newGrid[$newRow][$newCol] = $grid[$row][$col];
            }
        }
        return $newGrid;
    }
}
