<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target)
    {
        $map = [];
        $size = count($nums);
        for ($i = 0; $i < $size; $i++) {
            $complement = $target - $nums[$i];
            if (array_key_exists($complement, $map)) {
                return [$i, $map[$complement]];
            }
            $map[$nums[$i]] = $i;
        }
    }
}
