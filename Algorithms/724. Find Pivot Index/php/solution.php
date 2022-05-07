<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function pivotIndex($nums)
    {
        $sum = array_sum($nums);
        $leftSum = 0;
        foreach ($nums as $i => $num) {
            if ($leftSum == $sum - $leftSum - $num) {
                return $i;
            }
            $leftSum += $num;
        }
        return -1;
    }
}