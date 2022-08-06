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
        $maxRobbedAmount = array_fill(0, $N + 1, 0);
        $maxRobbedAmount[$N] = 0;
        $maxRobbedAmount[$N - 1] = $nums[$N - 1];
        for ($i = $N - 2; $i >= 0; $i--) {
            $maxRobbedAmount[$i] = max($maxRobbedAmount[$i + 1], $maxRobbedAmount[$i + 2] + $nums[$i]);
        }
        return $maxRobbedAmount[0];
    }
}
