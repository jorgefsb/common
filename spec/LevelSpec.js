var xp = require('../xp');
describe('xp', function () {
    it('generates levels correctly', function () {
        var boundary = [
            { level: 0, to: 6 },
            { level: 1, to: 15 },
            { level: 2, to: 28 },
            { level: 3, to: 46 },
            { level: 4, to: 67 },
            { level: 5, to: 93 },
            { level: 6, to: 123 },
            { level: 7, to: 157 },
            { level: 8, to: 195 },
            { level: 9, to: 238 },
        ];
        for (var k = 0; k < 1; k++) {
            var bound = 0;
            for (var i = 0; i < 100; i++) {
                if (i >= boundary[bound].to) {
                    bound++;
                }

                expect(xp.getLevel(i)).toBe(boundary[bound].level);
            }
        }
    });
});
