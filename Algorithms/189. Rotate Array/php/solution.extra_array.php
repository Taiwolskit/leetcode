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
        $n = count($nums);
        $a = array_fill(0, $n, 0);
        for ($i = 0; $i < $n; $i++) {
            $a[($i + $k) % $n] = $nums[$i];
        }
        for ($i = 0; $i < $n; $i++) {
            $nums[$i] = $a[$i];
        }
    }
}
