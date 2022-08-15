<?php
class Solution
{

    /**
     * @param Integer[] $cost
     * @return Integer
     */
    function minCostClimbingStairs($cost)
    {
        $memo = [];
        return $this->minimumCost($cost, count($cost), $memo);
    }

    function minimumCost($cost, $i, $memo)
    {
        if ($i <= 1) {
            return 0;
        }
        if (isset($memo[$i])) {
            return $memo[$i];
        }
        $memo[$i] = min($this->minimumCost($cost, $i - 1, $memo) + $cost[$i - 1], $this->minimumCost($cost, $i - 2, $memo) + $cost[$i - 2]);
        return $memo[$i];
    }
}
