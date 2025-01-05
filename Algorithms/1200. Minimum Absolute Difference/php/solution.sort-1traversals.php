class Solution {
    /**
     * @param Integer[] $arr
     * @return Integer[][]
     */
    function minimumAbsDifference($arr) {
        sort($arr);
        $minPairDiff = PHP_INT_MAX;
        $answer = array();
        
        for ($i = 0; $i < count($arr) - 1; $i++) {
            $currPairDiff = $arr[$i + 1] - $arr[$i];
            
            if ($currPairDiff === $minPairDiff) {
                array_push($answer, [$arr[$i], $arr[$i + 1]]);
            } elseif ($currPairDiff < $minPairDiff) {
                $answer = array([$arr[$i], $arr[$i + 1]]);
                $minPairDiff = $currPairDiff;
            }
        }
        
        return $answer;
    }
}
