var emoticons = require('../emoticons');
describe('emoticons', function () {
    describe('getMaximumEmoticons', function () {
        it('works correctly', function () {
            expect(emoticons.getMaximumEmoticons(0)).toBe(2);
            expect(emoticons.getMaximumEmoticons(5)).toBe(4);
            expect(emoticons.getMaximumEmoticons(1000)).toBe(22);
        });
    });
    describe('getSubsToNextEmote', function () {
        it('works correctly', function () {
            expect(emoticons.getSubsToNextEmote(0)).toBe(5);
            expect(emoticons.getSubsToNextEmote(5)).toBe(10);
            expect(emoticons.getSubsToNextEmote(1000)).toBe(0);
        });
    });
});
