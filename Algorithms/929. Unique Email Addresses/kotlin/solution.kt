class Solution {
    fun numUniqueEmails(emails: Array<String>): Int {
        return emails
                .map {
                    val localName =
                            it.substringBefore('@').filter { c -> c != '.' }.substringBefore('+')
                    val address = it.substringAfter('@')
                    "$localName@$address"
                }
                .toSet()
                .size
    }
}
