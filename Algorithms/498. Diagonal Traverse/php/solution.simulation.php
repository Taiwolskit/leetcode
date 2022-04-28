<?php
class Solution
{

    /**
     * @param Integer[][] $mat
     * @return Integer[]
     */
    function findDiagonalOrder($mat)
    {
        $m = count($mat);
        $n = count($mat[0]);

        $r = $c = 0;

        for ($i = 0; $i < $m * $n; $i++) {
            $ans[] = $mat[$r][$c];

            if (($r + $c) % 2 == 0) {
                if ($c == $n - 1) {
                    $r++;
                } elseif ($r == 0) {
                    $c++;
                } else {
                    $r--;
                    $c++;
                }
            } else {
                if ($r == $m - 1) {
                    $c++;
                } elseif ($c == 0) {
                    $r++;
                } else {
                    $r++;
                    $c--;
                }
            }
        }

        return $ans;
    }
}
