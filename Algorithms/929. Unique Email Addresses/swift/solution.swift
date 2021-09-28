class Solution {
    func numUniqueEmails(_ emails: [String]) -> Int {
        guard emails.count > 0 else { return 0 }
        var resultSet = Set<String>()

        for email in emails {
            let seperated = email.split(separator: "@")
            let local = seperated[0], validDomain = seperated[1]
            var validLocal = String()

            for char in local where char != "." {
                guard char != "+" else { break }
                validLocal.append(char)
            }

            let validFormat = validLocal + "@" + validDomain
            resultSet.insert(String(validFormat))
        }
        return resultSet.count
    }
}
