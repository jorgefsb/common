var Role = require('./base');

function InteractiveEditorRole () {
    this.name = 'InteractiveEditor';
    this.level = 0;
    this.permissions = [
        'tetris:manage'
    ];

    Role.call(this);
}

InteractiveEditorRole.prototype = Object.create(Role.prototype);

module.exports = new InteractiveEditorRole();
