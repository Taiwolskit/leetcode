<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findNumbers($nums)
    {
        $count = 0;
        foreach ($nums as $num) {
            if (strlen((string)$num) % 2 == 0) {
                $count++;
            }
        }
        return $count;
    }
}