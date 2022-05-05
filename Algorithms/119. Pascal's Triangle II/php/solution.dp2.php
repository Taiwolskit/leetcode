<?php
class Solution
{

    /**
     * @param Integer $rowIndex
     * @return Integer[]
     */
    function getRow($rowIndex)
    {
        $ans = array_fill(0, $rowIndex + 1, 1);
        for ($i = 1; $i < $rowIndex; $i++) {
            for ($j = $i; $j > 0; $j--) {
                $ans[$j] += $ans[$j - 1];
            }
        }
        return $ans;
    }
}
