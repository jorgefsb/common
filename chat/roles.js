var Banned = module.exports.Banned = [];

var Muted = module.exports.Muted = Banned.concat([
    'connect'
]);

var Normal = module.exports.Normal = Muted.concat([
    'chat',
    'poll_vote'
]);

var Mod = module.exports.Mod = Normal.concat([
    'poll_start',
    'bypass_links',
    'bypass_slowchat'
]);

var Admin = module.exports.Admin = Mod.concat([
    'edit_options',
    'change_role'
]);

var Owner = module.exports.Owner = Admin.concat([]);
