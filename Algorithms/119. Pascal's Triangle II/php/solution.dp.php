<?php
class Solution
{

    /**
     * @param Integer $rowIndex
     * @return Integer[]
     */
    function getRow($rowIndex)
    {
        $curr = array();
        $prev = array(1);
        for ($i = 1; $i <= $rowIndex; $i++) {
            $curr = array(1);
            for ($j = 1; $j < $i; $j++) {
                $curr[] = $prev[$j - 1] + $prev[$j];
            }
            $curr[] = 1;
            $prev = $curr;
        }
        return $prev;
    }
}
