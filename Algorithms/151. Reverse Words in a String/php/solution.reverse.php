<?php
class Solution
{

    function trimSpaces($s)
    {
        $left = 0;
        $right = strlen($s) - 1;
        while ($left <= $right && $s[$left] == ' ') {
            $left++;
        }
        while ($left <= $right && $s[$right] == ' ') {
            $right--;
        }

        $output = array();
        for ($i = $left; $i <= $right; $i++) {
            if ($s[$i] != ' ' || $output[count($output) - 1] != ' ') {
                $output[] = $s[$i];
            }
        }
        return $output;
    }

    function reverse($l, $left, $right)
    {
        while ($left < $right) {
            $temp = $l[$left];
            $l[$left] = $l[$right];
            $l[$right] = $temp;
            $left++;
            $right--;
        }
        return $l;
    }

    function reverseEachWord($l)
    {
        $n = count($l);
        $start = 0;
        $end = 0;

        while ($end < $n) {
            while ($end < $n && $l[$end] != ' ') {
                $end++;
            }
            $l = $this->reverse($l, $start, $end - 1);
            $start = $end + 1;
            $end = $start;
        }
        return $l;
    }

    /**
     * @param String $s
     * @return String
     */
    function reverseWords($s)
    {
        $l = $this->trimSpaces($s);
        $l = $this->reverse($l, 0, count($l) - 1);
        $l = $this->reverseEachWord($l);
        return implode('', $l);
    }
}
