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
            $hashmap[$num] = $i;
        }
        foreach ($nums as $i => $num) {
            $complement = $target - $num;
            if (array_key_exists($complement, $hashmap) && $hashmap[$complement] != $i) {
                return [$i, $hashmap[$complement]];
            }
        }
    }
}
