<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return NULL
     */
    function moveZeroes(&$nums)
    {
        $lastNonZeroFoundAt = 0;
        for ($i = 0; $i < count($nums); $i++) {
            if ($nums[$i] != 0) {
                $tmp = $nums[$lastNonZeroFoundAt];
                $nums[$lastNonZeroFoundAt] = $nums[$i];
                $nums[$i] = $tmp;
                $lastNonZeroFoundAt++;
            }
        }
    }
}
