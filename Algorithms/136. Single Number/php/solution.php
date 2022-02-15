<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function singleNumber($nums)
    {
        $count_nums = array_count_values($nums);
        foreach ($count_nums as $key => $value) {
            if ($value == 1) {
                return $key;
            }
        }
    }
}
