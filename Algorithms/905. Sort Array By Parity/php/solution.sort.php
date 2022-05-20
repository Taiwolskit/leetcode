<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function sortArrayByParity($nums)
    {
        usort($nums, function ($a, $b) {
            return ($a % 2) - ($b % 2);
        });
        return $nums;
    }
}
