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
        $k %= $n;

        $start = $count = 0;
        while ($count < $n) {
            $current = $start;
            $prev = $nums[$start];

            do {
                $nextIdx = ($current + $k) % $n;
                $temp = $nums[$nextIdx];
                $nums[$nextIdx] = $prev;
                $prev = $temp;
                $current = $nextIdx;
                $count++;
            } while ($current != $start);
            $start++;
        }
    }
}
