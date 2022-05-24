<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findMaxConsecutiveOnes($nums)
    {
        $prev = -1;
        $curr = 0;
        $maxLen = 0;
        foreach ($nums as $num) {
            if ($num == 0) {
                $prev = $curr;
                $curr = 0;
            } else {
                $curr++;
            }

            $maxLen = max($maxLen, $prev + 1 + $curr);
        }

        return $maxLen;
    }
}
