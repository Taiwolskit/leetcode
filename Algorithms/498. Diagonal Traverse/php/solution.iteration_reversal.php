<?php
class Solution
{

    /**
     * @param Integer[][] $mat
     * @return Integer[]
     */
    function findDiagonalOrder($mat)
    {
        $N = count($mat);
        $M = count($mat[0]);
        $result = array();
        $intermediate = array();

        for ($d = 0; $d < $N + $M - 1; $d++) {
            $intermediate = array();

            if ($d < $M) {
                $r = 0;
                $c = $d;
            } else {
                $r = $d - $M + 1;
                $c = $M - 1;
            }

            while ($r < $N && $c >= 0) {
                $intermediate[] = $mat[$r][$c];
                $r++;
                $c--;
            }

            if ($d % 2 == 0) {
                $result = array_merge($result, array_reverse($intermediate));
            } else {
                $result = array_merge($result, $intermediate);
            }
        }

        return $result;
    }
}
