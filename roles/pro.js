var Role = require('./base');

function ProRole () {
    this.name = 'Pro';
    this.level = 11;
    this.permissions = [];

    Role.call(this);
}

ProRole.prototype = Object.create(Role.prototype);

module.exports = new ProRole();
