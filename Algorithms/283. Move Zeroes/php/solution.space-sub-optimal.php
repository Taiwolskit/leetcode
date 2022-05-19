<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return NULL
     */
    function moveZeroes(&$nums)
    {
        $n = count($nums);

        $numZeroes = 0;
        for ($i = 0; $i < $n; $i++) {
            if ($nums[$i] == 0) {
                $numZeroes++;
            }
        }

        $ans = array();
        foreach ($nums as $num) {
            if ($num != 0) {
                $ans[] = $num;
            }
        }

        while ($numZeroes > 0) {
            $ans[] = 0;
            $numZeroes--;
        }

        for ($i = 0; $i < $n; $i++) {
            $nums[$i] = $ans[$i];
        }
    }
}
