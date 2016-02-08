var Role = require('./base');

function StaffRole () {
    this.name = 'Staff';
    this.level = 110;
    this.inherits = ['Founder'];
    this.exclusivity = 30;
    this.permissions = [];

    Role.call(this);
}

StaffRole.prototype = Object.create(Role.prototype);

module.exports = new StaffRole();
