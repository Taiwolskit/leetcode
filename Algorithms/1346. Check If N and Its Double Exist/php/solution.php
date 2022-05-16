<?php
class Solution
{

    /**
     * @param Integer[] $arr
     * @return Boolean
     */
    function checkIfExist($arr)
    {
        $map = [];
        foreach ($arr as $val) {
            if (isset($map[$val * 2]) || ($val % 2 == 0 && isset($map[$val / 2]))) {
                return true;
            }
            $map[$val] = true;
        }
        return false;
    }
}
