<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findDuplicate($nums)
    {
        $tortoise = $hare = $nums[0];
        while (true) {
            $tortoise = $nums[$tortoise];
            $hare = $nums[$nums[$hare]];
            if ($tortoise == $hare) {
                break;
            }
        }

        $tortoise = $nums[0];
        while ($tortoise != $hare) {
            $tortoise = $nums[$tortoise];
            $hare = $nums[$hare];
        }
        return $hare;
    }
}
