var Role = require('./base');

function BannedRole () {
    this.exclusivity = 10;
    this.name = 'Banned';
    this.level = 0;
    this.permissions = [];

    Role.call(this);
}

BannedRole.prototype = Object.create(Role.prototype);

module.exports = new BannedRole();
