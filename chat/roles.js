var Banned = module.exports.Banned = [];

var Muted = module.exports.Muted = Banned.concat([
    'connect'
]);

var User = module.exports.User = Muted.concat([
    'chat',
    'poll_vote'
]);

var Mod = module.exports.Mod = User.concat([
    'poll_start',
    'bypass_links',
    'bypass_slowchat',
    'remove_message'
]);

var Admin = module.exports.Admin = Mod.concat([
    'edit_options',
    'change_role',
    'be_immutable'
]);

var Owner = module.exports.Owner = Admin.concat([]);
