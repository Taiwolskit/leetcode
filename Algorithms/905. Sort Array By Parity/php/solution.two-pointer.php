<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function sortArrayByParity($nums)
    {
        $even = [];
        foreach ($nums as $num) {
            if ($num % 2 === 0) {
                $even[] = $num;
            }
        }
        return array_merge($even, array_diff($nums, $even));
    }
}
