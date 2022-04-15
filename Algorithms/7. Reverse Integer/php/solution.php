<?php
class Solution
{

    /**
     * @param Integer $x
     * @return Integer
     */
    function reverse($x)
    {
        $rev = 0;
        while ($x != 0) {
            $pop = $x % 10;
            $x = (int) ($x / 10);
            if ($rev > 214748364 || ($rev == 214748364 && $pop > 7)) {
                return 0;
            }
            if ($rev < -214748364 || ($rev == -214748364 && $pop < -8)) {
                return 0;
            }
            $rev = $rev * 10 + $pop;
        }
        return $rev;
    }
}
