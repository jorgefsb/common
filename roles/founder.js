var Role = require('./base');

/**
 */
function FounderRole () {
    this.name = 'Founder';
    this.level = 120;
    this.inherits = ['Owner'];
    this.exclusivity = 20;
    this.permissions = [
        'achievement:view',
        'announcement:create',
        'channel:analytics',
        'channel:partnership',
        'channel:suspend',
        'channel:update',
        'chat:view_lurkers',
        'partnership:manage',
        'interactive:manage',
        'interactive:review',
        'user:delete',
        'user:details',
        'user:log',
        'user:twofactor',
        'user:update'
    ];

    Role.call(this);
}

FounderRole.prototype = Object.create(Role.prototype);

module.exports = new FounderRole();
