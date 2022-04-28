<?php
class Solution
{

    /**
     * @param Integer[][] $mat
     * @return Integer[]
     */
    function findDiagonalOrder($mat)
    {
        $d = array();
        for ($i = 0; $i < count($mat); $i++) {
            for ($j = 0; $j < count($mat[$i]); $j++) {
                if (!isset($d[$i + $j])) {
                    $d[$i + $j] = array();
                }
                $d[$i + $j][] = $mat[$i][$j];
            }
        }

        $result = array();
        foreach ($d as $key => $value) {
            if ($key % 2 == 0) {
                $result = array_merge($result, array_reverse($value));
            } else {
                $result = array_merge($result, $value);
            }
        }

        return $result;
    }
}
