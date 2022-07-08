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
        $hashmap = [];
        foreach ($nums as $i => $num) {
            $complement = $target - $num;
            if (array_key_exists($complement, $hashmap)) {
                return [$i, $hashmap[$complement]];
            }
            $hashmap[$num] = $i;
        }
    }
}
