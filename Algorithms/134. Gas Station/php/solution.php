<?php
class Solution
{

    /**
     * @param Integer[] $gas
     * @param Integer[] $cost
     * @return Integer
     */
    function canCompleteCircuit($gas, $cost)
    {
        $totalTank = 0;
        $currTank = 0;
        $startStation = 0;

        for ($i = 0; $i < count($gas); $i++) {
            $totalTank += $gas[$i] - $cost[$i];
            $currTank += $gas[$i] - $cost[$i];

            if ($currTank < 0) {
                $startStation = $i + 1;
                $currTank = 0;
            }
        }

        if ($totalTank >= 0) {
            return $startStation;
        }
        return -1;
    }
}
