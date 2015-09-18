var Role = require('./base');

function UserRole () {
    this.name = 'User';
    this.level = 10;
    this.permissions = [
        'user:analytics:self',
        'user:edit:self',
        'user:delete:self',
        'user:update:self',
        'user:twofactor:self',
        'user:log:self',
        'user:delete:self',
        'achievement:view:self',
        'channel:update:self',
        'channel:partnership:self',
        'channel:details:self',
        'channel:costream:self',
        'channel:follow:self',
        'channel:analytics:self',
        'transaction:cancel:self',
        'transaction:view:self',
        'subscription:view:self',
        'subscription:create:self',
        'subscription:renew:self',
        'subscription:cancel:self',
        'messages:read:self',
        'messages:create:self',
        'messages:reply:self',
        'messages:delete:self',
        'oauth:authorize:self',
        'oauth:manage:self',
        'shop:checkout',
        'resource:find:self',
        'resource:delete:self',
        'notification:view:self',
        'notification:update:self',
        'log:view:self',
        'chat:connect',
        'chat:chat'
    ];

    Role.call(this);
}

UserRole.prototype = Object.create(Role.prototype);

module.exports = new UserRole();
