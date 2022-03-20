<?php
class Solution
{

    /**
     * @param Integer[] $tops
     * @param Integer[] $bottoms
     * @return Integer
     */
    function minDominoRotations($tops, $bottoms)
    {
        $rotations = $this->check($tops, $bottoms, $tops[0]);
        if ($rotations !== -1 || $tops[0] == $bottoms[0]) {
            return $rotations;
        }
        return $this->check($tops, $bottoms, $bottoms[0]);
    }

    function check($tops, $bottoms, $x)
    {
        $rotations_a = $rotations_b = 0;
        for ($i = 0; $i < count($tops); $i++) {
            if ($tops[$i] != $x && $bottoms[$i] != $x) {
                return -1;
            } else if ($tops[$i] != $x) {
                $rotations_a++;
            } else if ($bottoms[$i] != $x) {
                $rotations_b++;
            }
        }
        return min($rotations_a, $rotations_b);
    }
}
