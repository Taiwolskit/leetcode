<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findMaxConsecutiveOnes($nums)
    {
        $longestSequence = 0;
        $left = 0;
        $right = 0;
        $numZeroes = 0;

        while ($right < count($nums)) {
            if ($nums[$right] == 0) {
                $numZeroes++;
            }

            while ($numZeroes == 2) {
                if ($nums[$left] == 0) {
                    $numZeroes--;
                }
                $left++;
            }

            $longestSequence = max($longestSequence, $right - $left + 1);
            $right++;
        }

        return $longestSequence;
    }
}
