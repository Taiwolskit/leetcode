class Solution {
    func intToRoman(_ num: Int) -> String {
        var num = num
        var ans = ""
        
        let val = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
        let str = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
        
        for i in 0 ..< val.count {
            while num - val[i] >= 0 {
                ans += str[i]
                num -= val[i]
            }
        }
        
        return ans
    }
}