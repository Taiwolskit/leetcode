<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findMaxConsecutiveOnes($nums)
    {
        $max = 0;
        $count = 0;
        for ($i = 0; $i < count($nums); $i++) {
            if ($nums[$i] == 1) {
                $count++;
                if ($count > $max) {
                    $max = $count;
                }
            } else {
                $count = 0;
            }
        }
        return $max;
    }
}