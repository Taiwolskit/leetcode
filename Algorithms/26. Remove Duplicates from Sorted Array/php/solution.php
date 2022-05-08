<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums)
    {
        $i = 0;
        if (empty($nums)) {
            return $i;
        }

        for ($j = 1; $j < count($nums); $j++) {
            if ($nums[$i] != $nums[$j]) {
                $i++;
                $nums[$i] = $nums[$j];
            }
        }
        return $i + 1;
    }
}
