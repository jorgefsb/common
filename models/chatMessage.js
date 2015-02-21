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

    ChatMessage.setter('message', function (value) {
        return JSON.stringify(value);
    });

    ChatMessage.getter('message', function (value) {
        try {
            return JSON.parse(value);
        } catch (e) {
            return value;
        }
    });


    return ChatMessage;
};
