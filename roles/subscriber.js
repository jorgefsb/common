var Role = require('./base');

function SubscriberRole () {
    this.name = 'Subscriber';
    this.level = 12;
    this.permissions = [];

    Role.call(this);
}

SubscriberRole.prototype = Object.create(Role.prototype);

module.exports = new SubscriberRole();
