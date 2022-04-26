<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findMiddleIndex($nums)
    {
        $left = 0;
        $right = array_sum($nums);
        foreach ($nums as $i => $value) {
            $right -= $value;
            if ($left == $right) {
                return $i;
            }
            $left += $value;
        }

        return -1;
    }
}
