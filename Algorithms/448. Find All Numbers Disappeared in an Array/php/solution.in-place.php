<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function findDisappearedNumbers($nums)
    {
        foreach ($nums as $num) {
            $index = abs($num) - 1;
            $nums[$index] = -abs($nums[$index]);
        }

        $result = [];
        foreach ($nums as $i => $num) {
            if ($num > 0) {
                $result[] = $i + 1;
            }
        }
        return $result;
    }
}
