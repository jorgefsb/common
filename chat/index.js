var roles = require('./roles');

// Source: http://recurial.com/programming/javascript-snippet-replace-urls-with-hyperlinks/
var linkPattern = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

/**
 * Gets the role of the user object. "User" if we don't match anything else.
 * @param  {Object|String} user
 * @return {Boolean}
 */
var getRole = module.exports.getRole = function (user) {
    var role;
    if (typeof user === 'string') {
        role = user;
    } else {
        role = user ? user.role : null;
    }

    var obj = roles[role];
    if (typeof obj === 'undefined') {
        obj = roles.User;
    }

    return obj;
};

/**
 * Returns whether the user is able to perform the given action.
 *
 * @param  {Object} user
 * @param  {String} action
 * @return {Boolean}
 */
module.exports.can = function (user, action) {
    return getRole(user).permissions.indexOf(action) !== -1;
};

/**
 * Gets the "role level" of the user. Users with a higher level
 * can act on those below them, and users with a lower level
 * cannot act on users above them.
 *
 * @param  {Object} user
 * @return {Number}
 */
module.exports.level = function (user) {
    return getRole(user).level;
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
