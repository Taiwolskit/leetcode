<?php
class Solution
{
    /**
     * @param Integer[][] $matrix
     * @param Integer $target
     * @return Boolean
     */
    function searchMatrix($matrix, $target)
    {
        $m = count($matrix);
        if ($m == 0) {
            return false;
        }
        $n = count($matrix[0]);

        $left = 0;
        $right = $m * $n - 1;
        while ($left <= $right) {
            $pivotIdx = (int)(($left + $right) / 2);
            $pivotElement = $matrix[(int)($pivotIdx / $n)][$pivotIdx % $n];
            if ($pivotElement == $target) {
                return true;
            } else if ($pivotElement < $target) {
                $left = $pivotIdx + 1;
            } else {
                $right = $pivotIdx - 1;
            }
        }
        return false;
    }
}
