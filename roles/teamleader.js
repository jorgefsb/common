var Role = require('./base');

function TeamLeaderRole () {
    this.name = 'TeamLeader';
    this.level = 50;
    this.permissions = [
        'team:administer'
    ];

    Role.call(this);
}

TeamLeaderRole.prototype = Object.create(Role.prototype);

module.exports = new TeamLeaderRole();
