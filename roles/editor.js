var Role = require('./base');

/**
 */
function ChannelEditorRole () {
    this.name = 'ChannelEditor';
    this.level = 0;
    this.permissions = [
        'channel:update'
    ];

    Role.call(this);
}

ChannelEditorRole.prototype = Object.create(Role.prototype);

module.exports = new ChannelEditorRole();
