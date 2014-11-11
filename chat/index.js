var roles = require('./roles');

// Source: http://recurial.com/programming/javascript-snippet-replace-urls-with-hyperlinks/
var linkPattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

/**
 * Returns whether the user is able to perform the given action.
 *
 * @param  {object} user
 * @param  {string} action
 * @return {boolean}
 */
module.exports.can = function (user, action) {
    var permissions = roles[user.role];
    if (typeof permissions === 'undefined') {
        permissions = roles.Normal;
    }

    return permissions.indexOf(action) !== -1;
};

/**
 * Returns whether the message text contains a URL.
 *
 * @param  {string} message
 * @return {boolean}
 */
module.exports.containsLink = function (message) {
    return linkPattern.test(message);
};

/**
 * Replaces links in the text using standard regex.
 *
 * @param  {string} message
 * @return {string}
 */
module.exports.replaceLink = function (message, replacement) {
    return message.replace(linkPattern, replacement);
};
