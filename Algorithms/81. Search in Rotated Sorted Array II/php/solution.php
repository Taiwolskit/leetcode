<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Boolean
     */
    function search($nums, $target)
    {
        $n = count($nums);
        if ($n == 0) {
            return false;
        }
        $end = $n - 1;
        $start = 0;
        while ($start <= $end) {
            $mid = intdiv($start + $end, 2);
            if ($nums[$mid] == $target) {
                return true;
            }
            if ($nums[$start] == $nums[$mid]) {
                $start++;
                continue;
            }

            if ($nums[$mid] > $nums[$start]) {
                if ($nums[$mid] > $target && $target >= $nums[$start]) {
                    $end = $mid - 1;
                } else {
                    $start = $mid + 1;
                }
            } else {
                if ($target > $nums[$mid] && $nums[$end] >= $target) {
                    $start = $mid + 1;
                } else {
                    $end = $mid - 1;
                }
            }
        }
        return false;
    }
}
