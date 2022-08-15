<?php
class Solution
{

    /**
     * @param Integer[] $cost
     * @return Integer
     */
    function minCostClimbingStairs($cost)
    {
        $downOne = 0;
        $downTwo = 0;
        for ($i = 2; $i <= count($cost); $i++) {
            $temp = $downOne;
            $downOne = min($downOne + $cost[$i - 1], $downTwo + $cost[$i - 2]);
            $downTwo = $temp;
        }
        return $downOne;
    }
}
