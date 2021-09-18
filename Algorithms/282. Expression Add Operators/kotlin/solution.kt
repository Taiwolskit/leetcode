class Solution {
    var answer = mutableListOf<String>()
    var digits = ""
    var target: Long = 0

    fun addOperators(num: String, target: Int): List<String> {
        if (num.length == 0) emptyList<String>()

        this.target = target.toLong()
        this.digits = num
        this.recurse(0, 0, 0, 0, mutableListOf<String>())
        return this.answer
    }

    fun recurse(index: Int, prev: Long, cur: Long, value: Long, ops: MutableList<String>) {
        val nums = this.digits
        var prevOp = prev
        var curOp = cur

        // Done processing all the digits in num
        if (index == nums.length) {

            // If the final value == target expected AND
            // no operand is left unprocessed
            if (value == this.target && curOp == 0L) {
                val sb = StringBuilder()
                ops.subList(1, ops.size).forEach { v -> sb.append(v) }
                this.answer.add(sb.toString())
            }
            return
        }

        // Extending the current operand by one digit
        curOp = curOp * 10 + Character.getNumericValue(nums[index])
        var rep = curOp.toString()
        val length = nums.length

        // To avoid cases where we have 1 + 05 or 1 * 05 since 05 won't be a
        // valid operand. Hence this check
        if (curOp > 0) {
            // NO OP recursion
            recurse(index + 1, prevOp, curOp, value, ops)
        }

        // ADDITION
        ops.add("+")
        ops.add(rep)
        recurse(index + 1, curOp, 0, value + curOp, ops)
        ops.removeAt(ops.size - 1)
        ops.removeAt(ops.size - 1)

        if (ops.size > 0) {
            // SUBTRACTION
            ops.add("-")
            ops.add(rep)
            recurse(index + 1, -curOp, 0, value - curOp, ops)
            ops.removeAt(ops.size - 1)
            ops.removeAt(ops.size - 1)

            // MULTIPLICATION
            ops.add("*")
            ops.add(rep)
            recurse(index + 1, curOp * prevOp, 0, value - prevOp + (curOp * prevOp), ops)
            ops.removeAt(ops.size - 1)
            ops.removeAt(ops.size - 1)
        }
    }
}
