<?php
class Solution
{

    /**
     * @param Integer[] $arr
     * @return Integer[]
     */
    function replaceElements($arr)
    {
        $mx = -1;
        for ($i = count($arr) - 1; $i >= 0; $i--) {
            $temp = $mx;
            $mx = max($arr[$i], $mx);
            $arr[$i] = $temp;
        }
        return $arr;
    }
}
