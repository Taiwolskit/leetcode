<?php
class Solution
{
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function rob($nums)
    {
        if (empty($nums)) {
            return 0;
        }
        $N = count($nums);
        $robNext = $nums[$N - 1];
        $robNextPlusOne = 0;
        for ($i = $N - 2; $i >= 0; $i--) {
            $current = max($robNext, $robNextPlusOne + $nums[$i]);
            $robNextPlusOne = $robNext;
            $robNext = $current;
        }
        return $robNext;
    }
}
