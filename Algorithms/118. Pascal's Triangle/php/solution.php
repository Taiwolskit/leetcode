<?php
class Solution
{

    /**
     * @param Integer $numRows
     * @return Integer[][]
     */
    function generate($numRows)
    {
        $triangle = array();

        for ($row = 0; $row < $numRows; $row++) {
            $triangle[$row] = array();
            for ($col = 0; $col <= $row; $col++) {
                if ($col == 0 || $col == $row) {
                    $triangle[$row][$col] = 1;
                } else {
                    $triangle[$row][$col] = $triangle[$row - 1][$col - 1] + $triangle[$row - 1][$col];
                }
            }
        }

        return $triangle;
    }
}
