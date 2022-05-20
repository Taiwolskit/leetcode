<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function sortArrayByParity($nums)
    {
        $i = 0;
        $j = count($nums) - 1;
        while ($i < $j) {
            if ($nums[$i] % 2 > $nums[$j] % 2) {
                $tmp = $nums[$i];
                $nums[$i] = $nums[$j];
                $nums[$j] = $tmp;
            }

            if ($nums[$i] % 2 === 0) {
                $i++;
            }
            if ($nums[$j] % 2 === 1) {
                $j--;
            }
        }

        return $nums;
    }
}
