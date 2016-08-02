var _ = require('lodash');

/**
 * Base role class.
 */
function Role () {
    // Set default role properties.
    _.defaults(this, {
        permissions: [],
        inherits: [],
        exclusivity: false
    });

    // Add all inherited role's properties.
    var self = this;
    _.forEach(this.inherits, function (inherit) {
        var role = Role.roles[inherit];
        self.permissions = _.union(self.permissions, role.permissions);
    });
}

/**
 * Checks to see if this role is dominant over another. This is true
 * if this role's exclusivity is higher, or the other role is not
 * exclusive and this is a higher level.
 *
 * @param  {Role} role
 * @return {Boolean}
 */
Role.prototype.dominates = function (role) {
    if (!role) {
        return true;
    }
    if (this.exclusivity || role.exclusivity) {
        return this.exclusivity > role.exclusivity;
    }
    return this.level > role.level;
};

/**
 * Returns if the role has a given permission.
 * @param  {String}  permission
 * @return {Boolean}
 */
Role.prototype.has = function (permission) {
    return this.permissions.indexOf(permission) !== -1;
};

/**
 * A map of role objects. We have to do this rather than dynamically
 * require so that Browserify can import it.
 * @return {Object}
 */
Role.roles = {};


module.exports = Role;
