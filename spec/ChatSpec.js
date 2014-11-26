var chat = require('../chat');

describe('roles', function () {
    it('applies default correctly in empty set', function () {
        expect(chat.can({}, 'chat')).toBe(true);
    });

    it('applies default correctly in odd role', function () {
        expect(chat.can({ role: 'Foo' }, 'chat')).toBe(true);
    });

    it('applies named role correctly', function () {
        expect(chat.can({ role: 'Banned' }, 'chat')).toBe(false);
    });

    it('works with role levels correctly', function () {
        expect(chat.level({ role: 'Banned' }) > chat.level({ role: 'Normal' })).toBe(false);
    });
});

describe('links', function () {
    it('detects links', function () {
        expect(chat.containsLink('http://beam.pro')).toBe(true);
        expect(chat.containsLink('lalalala')).toBe(false);
    });

    it('replaces links', function () {
        expect(chat.replaceLink('http://beam.pro', '<a href="$1" target="_blank">$1</a>'))
            .toBe('<a href="http://beam.pro" target="_blank">http://beam.pro</a>');
        expect(chat.replaceLink('lalalala')).toBe('lalalala');
    });
});
