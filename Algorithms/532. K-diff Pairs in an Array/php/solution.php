<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function findPairs($nums, $k)
    {
        $counter = array_count_values($nums);

        $result = 0;
        foreach ($counter as $num => $count) {
            if (($k > 0 && isset($counter[$k + $num])) || ($k == 0 && $count > 1)) {
                $result++;
            }
        }
        return $result;
    }
}
