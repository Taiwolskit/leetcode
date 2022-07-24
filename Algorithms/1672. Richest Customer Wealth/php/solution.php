<?php
class Solution
{

    /**
     * @param Integer[][] $accounts
     * @return Integer
     */
    function maximumWealth($accounts)
    {
        return max(array_map('array_sum', $accounts));
    }
}
