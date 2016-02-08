var Role = require('./base');

function FounderRole () {
    this.name = 'Founder';
    this.level = 120;
    this.inherits = ['Owner'];
    this.exclusivity = 20;
    this.permissions = [
        'announcement:create',
        'channel:suspend',
        'channel:update',
        'tetris:manage',
        'tetris:review'
    ];

    Role.call(this);
}

FounderRole.prototype = Object.create(Role.prototype);

module.exports = new FounderRole();
