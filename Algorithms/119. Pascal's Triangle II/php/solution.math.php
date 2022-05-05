<?php
class Solution
{

    /**
     * @param Integer $rowIndex
     * @return Integer[]
     */
    function getRow($rowIndex)
    {
        $ans = array(1);
        for ($k = 1; $k <= $rowIndex; $k++) {
            $ans[] = end($ans) * ($rowIndex - $k + 1) / $k;
        }
        return $ans;
    }
}
