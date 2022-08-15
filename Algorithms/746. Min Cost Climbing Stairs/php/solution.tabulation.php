<?php
class Solution
{

    /**
     * @param Integer[] $cost
     * @return Integer
     */
    function minCostClimbingStairs($cost)
    {
        $minimumCost = array_fill(0, count($cost) + 1, 0);
        for ($i = 2; $i <= count($cost); $i++) {
            $minimumCost[$i] = min($minimumCost[$i - 1] + $cost[$i - 1], $minimumCost[$i - 2] + $cost[$i - 2]);
        }
        return $minimumCost[count($cost)];
    }
}
