<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function sortedSquares($nums)
    {
        $n = count($nums);
        $result = array_fill(0, $n, 0);
        $left = 0;
        $right = $n - 1;
        $lastIndex = $n - 1;
        while ($left <= $right) {
            $leftSquare = $nums[$left] ** 2;
            $rightSquare = $nums[$right] ** 2;
            if ($leftSquare < $rightSquare) {
                $result[$lastIndex] = $rightSquare;
                $right--;
            } else {
                $result[$lastIndex] = $leftSquare;
                $left++;
            }
            $lastIndex--;
        }
        return $result;
    }
}
