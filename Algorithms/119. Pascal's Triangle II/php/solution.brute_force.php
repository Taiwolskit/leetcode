<?php
class Solution
{

    /**
     * @param Integer $rowIndex
     * @return Integer[]
     */
    function getRow($rowIndex)
    {
        $ans = [];
        for ($i = 0; $i <= $rowIndex; $i++) {
            $ans[] = $this->getNum($rowIndex, $i);
        }
        return $ans;
    }

    /**
     * @param int $row
     * @param int $col
     * @return int
     */
    private function getNum($row, $col)
    {
        if ($row == 0 || $col == 0 || $col == $row) {
            return 1;
        }
        return $this->getNum($row - 1, $col - 1) + $this->getNum($row - 1, $col);
    }
}
