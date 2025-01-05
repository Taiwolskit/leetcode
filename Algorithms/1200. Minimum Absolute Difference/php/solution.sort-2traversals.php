class Solution {
    /**
     * @param Integer[] $arr
     * @return Integer[][]
     */
    function minimumAbsDifference($arr) {
        // 排序原始陣列
        sort($arr);
        $answer = array();
        
        // 初始化最小差值
        $minPairDiff = PHP_INT_MAX;
        
        // 第一次遍歷計算最小差值
        for ($i = 0; $i < count($arr) - 1; $i++) {
            $minPairDiff = min($minPairDiff, $arr[$i + 1] - $arr[$i]);
        }
        
        // 第二次遍歷找出所有符合最小差值的配對
        for ($i = 0; $i < count($arr) - 1; $i++) {
            if ($arr[$i + 1] - $arr[$i] == $minPairDiff) {
                array_push($answer, [$arr[$i], $arr[$i + 1]]);
            }
        }
        
        return $answer;
    }
}
