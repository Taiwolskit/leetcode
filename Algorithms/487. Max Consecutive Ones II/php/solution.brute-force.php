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

        for ($left = 0; $left < count($nums); $left++) {
            $numZeroes = 0;
            for ($right = $left; $right < count($nums); $right++) {
                if ($numZeroes == 2) {
                    break;
                }
                if ($nums[$right] == 0) {
                    $numZeroes++;
                }
                if ($numZeroes <= 1) {
                    $longestSequence = max($longestSequence, $right - $left + 1);
                }
            }
        }

        return $longestSequence;
    }
}
