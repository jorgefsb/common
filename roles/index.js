var Role = require('./base');
var roles = module.exports = {};
var _ = require('lodash');

/**
 * List of roles to their permissions objects.
 * @type {Object}
 */
roles.list = Role.roles;
roles.list.Banned = require('./banned');
roles.list.User = require('./user');
roles.list.Pro = require('./pro');
roles.list.Subscriber = require('./subscriber');
roles.list.ChannelEditor = require('./editor');
roles.list.InteractiveEditor = require('./interactiveeditor');
roles.list.Mod = require('./mod');
roles.list.GlobalMod = require('./globalmod');
roles.list.Owner = require('./owner');
roles.list.Founder = require('./founder');
roles.list.Staff = require('./staff');
roles.list.TeamLeader = require('./teamleader');

/**
 * Returns the dominant role out of a list of role names.
 *
 * @param  {String[]} list
 * @return {Role}
 */
roles.getDominant = function (list) {
    list = roles.populate(list);
    var max = list[0];

    for (var i = 1; i < list.length; i++) {
        if (list[i].dominates(max)) {
            max = list[i];
        }
    }

    return max;
};

/**
 * Swaps a list of role names for role objects!
 * @param  {String[]|Role[]} list
 * @return {Role[]}
 */
roles.populate = function (list) {
    var output = [];
    for (var i = 0, l = list.length; i < l; i++) {
        if (roles.has(list[i])) {
            output.push(roles.get(list[i]));
        } else if (list[i] instanceof Role) {
            output.push(list[i]);
        }
    }

    return output;
};

/**
 * Returns a list of permission strings that the roles provide.
 * @param  {String[]|Role[]} list
 * @return {String[]}
 */
roles.getPermissions = function (list) {
    if (!list.length) {
        return [];
    }

    var sorted = roles.sort(list);
    var permissions = [];
    // If the first item in the list has an exclusivity, that's
    // all we need. Otherwise go down and merge permissions.
    if (sorted[0].exclusivity) {
        permissions = sorted[0].permissions;
    } else {
        for (var i = 0, l = sorted.length; i < l; i++) {
            permissions = permissions.concat(sorted[i].permissions);
        }
    }

    return _.uniqBy(permissions, function (perm) {
        return perm.replace(/\:self$/, '');
    });
};

/**
 * Sorts a list of role strings by "dominance" in descending order.
 * @param  {String[]|Role[]} list
 * @return {String[]}
 */
roles.sort = function (list) {
    return roles.populate(list).sort(function (a, b) {
        return a.dominates(b) ? -1 : 1;
    });
};

/**
 * Returns whether one `role` can administrate an `other`. This will be
 * true if the first role has a level greater than 25, and has a level
 * at least ten greater than the other.
 *
 * @param  {String} role
 * @param  {String} other
 * @return {Boolean}
 */
roles.canAdministrate = function (role, other) {
    role = typeof role === 'number' ? role : roles.getLevel(role);
    other = typeof other === 'number' ? other : roles.getLevel(other);

    return role >= 25 && role - 10 >= other;
};

/**
 * Returns the "level" of a role.
 * @param  {String} role
 * @return {Number}
 */
roles.getLevel = function (role) {
    return roles.has(role) ? roles.list[role].level : 0;
};

/**
 * Returns whether the  "role" is valid.
 * @param  {String}  role
 * @return {Boolean}
 */
roles.has = function (role) {
    return roles.list[role] !== undefined;
};

/**
 * Gets a Role object from its name.
 * @param  {String} role
 * @return {Role}
 */
roles.get = function (role) {
    return roles.list[role];
};
