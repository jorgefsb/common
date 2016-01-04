var xp = require('../xp');
describe('xp', function () {
    var boundary = [
        { level: 0, to: 5 },
        { level: 1, to: 14 },
        { level: 2, to: 27 },
        { level: 3, to: 45 },
        { level: 4, to: 66 },
        { level: 5, to: 92 },
        { level: 6, to: 122 },
        { level: 7, to: 156 },
        { level: 8, to: 195 },
        { level: 9, to: 237 },
    ];

    beforeEach(function () {
        xp.flushCache();
    });

    it('generates levels correctly', function () {
        for (var k = 0; k < 1; k++) {
            var bound = 0;
            for (var i = 0; i < 200; i++) {
                if (i >= boundary[bound].to) {
                    bound++;
                }

                expect(xp.getLevel(i)).toBe(boundary[bound].level);
            }
        }
    });

    it('gets xp at level correctly', function () {
        for (var i = 1; i < boundary.length; i++) {
            expect(xp.getXp(boundary[i].level)).toBe(boundary[i - 1].to);
        }
    });
});
