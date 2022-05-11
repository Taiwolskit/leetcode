<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function sortedSquares($nums)
    {
        $ans = array_map(function ($num) {
            return $num * $num;
        }, $nums);
        sort($ans);
        return $ans;
    }
}
