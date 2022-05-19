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
        foreach($nums as $num) {
            if ($num != 0) {
                $nums[$lastNonZeroFoundAt++] = $num;
            }
        }
        while ($lastNonZeroFoundAt < count($nums)) {
            $nums[$lastNonZeroFoundAt++] = 0;
        }
    }
}
