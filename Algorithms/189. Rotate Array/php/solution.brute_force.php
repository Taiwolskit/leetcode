<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return NULL
     */
    function rotate(&$nums, $k)
    {
        $k %= count($nums);

        for ($i = 0; $i < $k; $i++) {
            $previous = $nums[count($nums) - 1];
            for ($j = 0; $j < count($nums); $j++) {
                $current = $nums[$j];
                $nums[$j] = $previous;
                $previous = $current;
            }
        }
    }
}
