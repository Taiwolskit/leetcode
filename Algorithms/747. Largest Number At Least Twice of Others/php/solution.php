<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function dominantIndex($nums)
    {
        if (count($nums) == 0) {
            return -1;
        }
        $max = max($nums);
        $maxIndex = array_search($max, $nums);
        foreach ($nums as $idx => $value) {
            if ($idx == $maxIndex) {
                continue;
            }
            if ($value * 2 > $max) {
                return -1;
            }
        }
        return $maxIndex;
    }
}
