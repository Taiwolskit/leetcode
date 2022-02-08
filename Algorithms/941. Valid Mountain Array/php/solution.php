<?php
class Solution
{

    /**
     * @param Integer[] $arr
     * @return Boolean
     */
    function validMountainArray($arr)
    {
        $N = count($arr);
        if ($N < 3) {
            return false;
        }
        $i = 0;
        while ($i < $N - 1 && $arr[$i] < $arr[$i + 1]) {
            $i++;
        }
        if ($i == 0 || $i == $N - 1) {
            return false;
        }
        while ($i < $N - 1 && $arr[$i] > $arr[$i + 1]) {
            $i++;
        }
        return $i == $N - 1;
    }
}
