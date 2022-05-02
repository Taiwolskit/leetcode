<?php
class Solution
{

    /**
     * @param Integer[] $numbers
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($numbers, $target)
    {
        $low = 0;
        $high = count($numbers) - 1;
        while ($low < $high) {
            $sum = $numbers[$low] + $numbers[$high];
            if ($sum == $target) {
                return [$low + 1, $high + 1];
            }
            if ($sum < $target) {
                $low++;
            } else {
                $high--;
            }
        }
        return [-1, -1];
    }
}