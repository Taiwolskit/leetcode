<?php
class Solution
{
    /**
     * @param Integer[] $people
     * @param Integer $limit
     * @return Integer
     */
    function numRescueBoats($people, $limit)
    {
        sort($people);
        $i = 0;
        $j = count($people) - 1;
        $ans = 0;
        while ($i <= $j) {
            $ans++;
            if ($people[$i] + $people[$j] <= $limit) {
                $i++;
            }
            $j--;
        }
        return $ans;
    }
}
