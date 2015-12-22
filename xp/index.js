/**
 * Converts a number of experience points to the level that the user is at.
 * See the table the beam backend docs for the actual values.
 * @param  {Number} xp
 * @return {Number}
 */
exports.getLevel = (function () {
    // Computing the level curve is fairly expensive, so I added this cache
    // for when this gets used on the backend or abused on the frontend.
    var cache = [{ xp: 0, level: 0 }];

    return function (xp) {
        for (var i = 1; i < cache.length; i++) {
            if (cache[i].xp > xp) {
                return cache[i - 1].level;
            }
        }

        // if we got to here, expand the cache
        var last = cache[cache.length - 1];
        while (last.xp <= xp) {
            var level = last.level + 1;
            last = {
                level: level,
                xp: 4 * level + Math.pow(1.5, level / 4) + last.xp
            };

            cache.push(last);
        }

        // Return the second to last level, since we just generated
        // up to the level after the user's current one.
        return cache[cache.length - 2].level;
    };
})();
