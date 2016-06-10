var Role = require('./base');

/**
 */
function GlobalModRole () {
    this.name = 'GlobalMod';
    this.level = 60;
    this.inherits = ['Mod'];
    this.permissions = [
        'channel:suspend',
        'chat:view_lurkers'
    ];

    Role.call(this);
}

GlobalModRole.prototype = Object.create(Role.prototype);

module.exports = new GlobalModRole();
