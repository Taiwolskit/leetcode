<?php
class Solution
{

    /**
     * @param Integer[] $height
     * @return Integer
     */
    function maxArea($height)
    {
        $area = 0;
        $left = 0;
        $right = count($height) - 1;

        while ($left < $right) {
            $area = max($area, min($height[$left], $height[$right]) * ($right - $left));
            if ($height[$left] < $height[$right]) {
                $left++;
            } else {
                $right--;
            }
        }
        return $area;
    }
}
