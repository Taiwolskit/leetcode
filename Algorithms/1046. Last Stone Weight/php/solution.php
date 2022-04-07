<?php
class Solution
{

    /**
     * @param Integer[] $stones
     * @return Integer
     */
    function lastStoneWeight($stones)
    {
        $maxWeight = max($stones);
        $buckets = array_fill(0, $maxWeight + 1, 0);
        foreach ($stones as $stone) {
            $buckets[$stone]++;
        }

        $biggestWeight = 0;
        $currentWeight = $maxWeight;
        while ($currentWeight > 0) {
            if ($buckets[$currentWeight] == 0) {
                $currentWeight--;
            } else if ($biggestWeight == 0) {
                $buckets[$currentWeight] %= 2;
                if ($buckets[$currentWeight] == 1) {
                    $biggestWeight = $currentWeight;
                }
                $currentWeight--;
            } else {
                $buckets[$currentWeight]--;
                if ($biggestWeight - $currentWeight <= $currentWeight) {
                    $buckets[$biggestWeight - $currentWeight]++;
                    $biggestWeight = 0;
                } else {
                    $biggestWeight -= $currentWeight;
                }
            }
        }
        return $biggestWeight;
    }
}
