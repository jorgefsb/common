var Role = require('./base');

/**
 */
function ModRole () {
    this.name = 'Mod';
    this.level = 50;
    this.permissions = [
        'chat:bypass_links',
        'chat:bypass_slowchat',
        'chat:change_ban',
        'chat:clear_messages',
        'chat:remove_message',
        'chat:timeout'
        'chat:view_deleted',
    ];

    Role.call(this);
}

ModRole.prototype = Object.create(Role.prototype);

module.exports = new ModRole();
