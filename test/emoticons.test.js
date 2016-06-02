var emoticons = require('../emoticons');
var expect = require('chai').expect;

describe('emoticons', function () {
    describe('getMaximumEmoticons', function () {
        it('works correctly', function () {
            expect(emoticons.getMaximumEmoticons(0)).to.equal(2);
            expect(emoticons.getMaximumEmoticons(5)).to.equal(4);
            expect(emoticons.getMaximumEmoticons(1000)).to.equal(22);
        });
    });
    describe('getSubsToNextEmote', function () {
        it('works correctly', function () {
            expect(emoticons.getSubsToNextEmote(0)).to.equal(5);
            expect(emoticons.getSubsToNextEmote(5)).to.equal(10);
            expect(emoticons.getSubsToNextEmote(1000)).to.equal(0);
        });
    });
});
