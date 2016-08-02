var Role = require('./base');

/**
 */
function UserRole () {
    this.name = 'User';
    this.level = 10;
    this.permissions = [
        'achievement:view:self',
        'channel:analytics:self',
        'channel:costream:self',
        'channel:details:self',
        'channel:follow:self',
        'channel:partnership:self',
        'channel:streamKey:self',
        'channel:update:self',
        'act:follow',
        'act:host',
        'act:subscribe',
        'act:interactive',
        'act:join:discord',
        'chat:chat',
        'chat:connect',
        'chat:whisper',
        'chat:poll_vote',
        'invoice:view:self',
        'log:view:self',
        'messages:create:self',
        'messages:delete:self',
        'messages:read:self',
        'messages:reply:self',
        'oauth:authorize:self',
        'oauth:manage:self',
        'oauth:manageApps:self',
        'recording:manage:self',
        'redeemable:create:self',
        'redeemable:redeem:self',
        'redeemable:view:self',
        'resource:delete:self',
        'resource:find:self',
        'shop:checkout',
        'subscription:cancel:self',
        'subscription:create:self',
        'subscription:renew:self',
        'subscription:view:self',
        'team:manage:self',
        'tetris:manage:self',
        'tetris:play',
        'tetris:robot:self',
        'transaction:cancel:self',
        'transaction:view:self',
        'user:analytics:self',
        'user:delete:self',
        'user:details:self',
        'user:getDiscordInvite:self',
        'user:log:self',
        'user:seen:self',
        'user:twofactor:self',
        'user:update:self',
        'user:notification:self'
    ];

    Role.call(this);
}

UserRole.prototype = Object.create(Role.prototype);

module.exports = new UserRole();
