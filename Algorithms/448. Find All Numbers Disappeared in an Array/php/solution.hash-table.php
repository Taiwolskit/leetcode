<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function findDisappearedNumbers($nums)
    {
        $hashTable = [];
        foreach ($nums as $num) {
            $hashTable[$num] = 1;
        }

        $result = [];
        for ($i = 1; $i <= count($nums); $i++) {
            if (!isset($hashTable[$i])) {
                $result[] = $i;
            }
        }
        return $result;
    }
}
