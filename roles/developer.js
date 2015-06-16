var Role = require('./base');

function DeveloperRole () {
    this.name = 'Developer';
    this.level = 110;
    this.inherits = ['Admin'];
    this.exclusivity = 30;
    this.permissions = [];

    Role.call(this);
}

DeveloperRole.prototype = Object.create(Role.prototype);

module.exports = new DeveloperRole();
