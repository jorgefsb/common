var Role = require('./base');

/**
 * Used to allow sharing of edit permissions on specific games.
 */
function InteractiveEditorRole () {
    this.name = 'InteractiveEditor';
    this.level = 0;
    this.permissions = [
        'interactive:manage'
    ];

    Role.call(this);
}

InteractiveEditorRole.prototype = Object.create(Role.prototype);

module.exports = new InteractiveEditorRole();
