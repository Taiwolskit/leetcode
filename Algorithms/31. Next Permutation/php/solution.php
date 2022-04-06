<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return NULL
     */
    function nextPermutation(&$nums)
    {
        $length = count($nums);
        $i = $length - 2;
        while ($i >= 0 && $nums[$i] >= $nums[$i + 1]) {
            $i--;
        }
        if ($i >= 0) {
            $j = $length - 1;
            while ($nums[$i] >= $nums[$j]) {
                $j--;
            }
            [$nums[$i], $nums[$j]] = [$nums[$j], $nums[$i]];
        }

        $revStart = $i + 1;
        $revEnd = $length - 1;
        while ($revStart < $revEnd) {
            [$nums[$revStart], $nums[$revEnd]] = [$nums[$revEnd], $nums[$revStart]];
            $revStart++;
            $revEnd--;
        }
    }
}
