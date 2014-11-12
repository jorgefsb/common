var roles = require('./roles');

// Source: http://recurial.com/programming/javascript-snippet-replace-urls-with-hyperlinks/
var linkPattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

/**
 * Gets the role of the user object. "User" if we don't match anything else.
 * @param  {Object} user
 * @return {Boolean}
 */
var getRole = module.exports.getRole = function (user) {
    var permissions = roles[user.role];
    if (typeof permissions === 'undefined') {
        permissions = roles.User;
    }

    return permissions;
};

/**
 * Returns whether the user is able to perform the given action.
 *
 * @param  {Object} user
 * @param  {String} action
 * @return {Boolean}
 */
module.exports.can = function (user, action) {
    return getRole(user).indexOf(action) !== -1;
};

/**
 * Gets the "role level" of the user. This is an integer which can be used
 * to compare the "priorities" of levels. It's based on the principle of
 * positive permissions. That is, users that can do more things will always
 * have more permissions.
 *
 * @param  {Object} user
 * @return {Number}
 */
module.exports.level = function (user) {
    return getRole(user).length;
};

/**
 * Returns whether the message text contains a URL.
 *
 * @param  {String} message
 * @return {Boolean}
 */
module.exports.containsLink = function (message) {
    return linkPattern.test(message);
};

/**
 * Replaces links in the text using standard regex.
 *
 * @param  {String} message
 * @return {String}
 */
module.exports.replaceLink = function (message, replacement) {
    return message.replace(linkPattern, replacement);
};
