<?php
class Solution
{

    /**
     * @param Integer $startValue
     * @param Integer $target
     * @return Integer
     */
    function brokenCalc($startValue, $target)
    {
        $ans = 0;
        while ($target > $startValue) {
            $ans++;
            if ($target % 2) {
                $target++;
            } else {
                $target /= 2;
            }
        }
        return $ans + $startValue - $target;
    }
}
