/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    return new Set(
        emails.map(
            (mail) =>
                `${mail.split('@')[0].replace(/\+.*$|\./g, '')}@${
                    mail.split('@')[1]
                }`
        )
    ).size;
};
