var Role = require('./base');

function AdminRole () {
    this.name = 'Admin';
    this.level = 120;
    this.inherits = ['Owner'];
    this.exclusivity = 20;
    this.permissions = [
        'announcement:create',
        'channel:suspend',
        'channel:update'
    ];

    Role.call(this);
}

AdminRole.prototype = Object.create(Role.prototype);

module.exports = new AdminRole();
