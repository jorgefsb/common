var Role = require('./base');

/**
 */
function OwnerRole () {
    this.name = 'Owner';
    this.level = 100;
    this.inherits = ['Mod', 'User'];
    this.exclusivity = 80;
    this.permissions = [
        'chat:change_ban',
        'chat:edit_options',
        'chat:change_role'
    ];

    Role.call(this);
}

OwnerRole.prototype = Object.create(Role.prototype);

module.exports = new OwnerRole();
