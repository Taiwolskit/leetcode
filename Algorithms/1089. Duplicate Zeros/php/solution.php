<?php
class Solution
{

    /**
     * @param Integer[] $arr
     * @return NULL
     */
    function duplicateZeros(&$arr)
    {
        $possibleDups = 0;
        $length_ = count($arr) - 1;
        for ($i = 0; $i <= $length_; $i++) {
            if ($i > $length_ - $possibleDups) {
                break;
            }
            if ($arr[$i] == 0) {
                if ($i == $length_ - $possibleDups) {
                    $arr[$length_] = 0;
                    $length_--;
                    break;
                }
                $possibleDups++;
            }
        }

        $last = $length_ - $possibleDups;
        for ($i = $last; $i >= 0; $i--) {
            $arr[$i + $possibleDups] = $arr[$i];
            if ($arr[$i] == 0) {
                $possibleDups--;
                $arr[$i + $possibleDups] = $arr[$i];
            }
        }
    }
}
