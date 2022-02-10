<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function subarraySum($nums, $k)
    {
        $count = 0;
        $sum = 0;
        $map = [0 => 1];
        foreach ($nums as $num) {
            $sum += $num;
            if (isset($map[$sum - $k])) {
                $count += $map[$sum - $k];
            }
            $map[$sum] = isset($map[$sum]) ? $map[$sum] + 1 : 1;
        }
        return $count;
    }
}
