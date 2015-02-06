module.exports = function (CQL) {
    var ChatUser = CQL.Model('ChatUser');

    ChatUser.columns([
        CQL.Int('channel').partitionKey(),
        CQL.Int('user_id').compoundKey(),
        CQL.Text('user_name'),
        CQL.Text('user_role'),
        CQL.Text('authkey'),
        CQL.Boolean('online')
    ]);

    return ChatUser;
};
