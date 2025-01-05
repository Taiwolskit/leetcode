class Solution {
    /**
     * @param Integer[] $arr
     * @return Integer[][]
     */
    function minimumAbsDifference($arr) {
        $minElement = min($arr);
        $maxElement = max($arr);
        $shift = -$minElement;
        $line = array_fill(0, $maxElement - $minElement + 1, 0);
        $answer = array();
        
        // 標記數字出現
        foreach ($arr as $num) {
            $line[$num + $shift] = 1;
        }
        
        $minPairDiff = $maxElement - $minElement;
        $prev = 0;
        
        // 遍歷找出最小差值對
        for ($curr = 1; $curr <= $maxElement + $shift; $curr++) {
            if ($line[$curr] === 0) continue;
            
            if ($curr - $prev === $minPairDiff) {
                array_push($answer, [$prev - $shift, $curr - $shift]);
            } elseif ($curr - $prev < $minPairDiff) {
                $answer = array();
                $minPairDiff = $curr - $prev;
                array_push($answer, [$prev - $shift, $curr - $shift]);
            }
            $prev = $curr;
        }
        
        return $answer;
    }
}
