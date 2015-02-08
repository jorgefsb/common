module.exports = function (CQL) {
    var ChatMessage = CQL.Model('ChatMessage');

    ChatMessage.columns([
        CQL.Int('channel').partitionKey(),
        CQL.TimeUUID('id').compoundKey(),
        CQL.Int('user_id'),
        CQL.Text('user_name'),
        CQL.Text('user_role'),
        CQL.Text('message')
    ]);

    return ChatMessage;
};
