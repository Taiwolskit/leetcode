<?php
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer[][]
     */
    function subsets($nums)
    {
        $this->output = array();
        $this->backtrack($nums, 0, array());
        return $this->output;
    }

    function backtrack($nums, $first, $curr)
    {
        array_push($this->output, $curr);

        for ($i = $first; $i < count($nums); $i++) {
            $num = $nums[$i];
            if (!in_array($num, $curr)) {
                array_push($curr, $num);
                $this->backtrack($nums, $i, $curr);
                array_pop($curr);
            }
        }
    }
}
