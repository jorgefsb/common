
/**
 * Utility class used for calculation experience
 * points and the corresponding level.
 */
function Calculator () {
    this.flushCache();
}

/**
 * Clears the calculator's cache. Mainly for debugging.
 */
Calculator.prototype.flushCache = function () {
    this.cache = [{ xp: 0, level: 0 }];
};

/**
 * Adds a new level to the cache.
 */
Calculator.prototype._buildLevel = function () {
    var last = this._lastLevel();
    var level = last.level + 1;

    var xp = 4 * level + Math.pow(1.5, level / 4) + last.xp;
    this.cache.push({
        level: level,
        xpFloor: Math.floor(xp),
        xp: xp
    });
};

/**
 * Returns the last level stored in the cache.
 * @return {Object}
 */
Calculator.prototype._lastLevel = function () {
    return this.cache[this.cache.length - 1];
};

/**
 * Returns the level that the user with the given XP is at.
 * @param  {Number} xp
 * @return {Number}
 */
Calculator.prototype.getLevel = function (xp) {
    while (this._lastLevel().xp < xp) {
        this._buildLevel();
    }

    var cache = this.cache;
    for (var i = cache.length - 1; i > 0; i--) {
        if (cache[i].xpFloor <= xp) {
            return cache[i].level;
        }
    }

    return 1;
};

/**
 * Returns the amount of XP necessary to reach the given level.
 * @param  {Number} level
 * @return {Number}
 */
Calculator.prototype.getXp = function (level) {
    if (level === 1) {
        return 0;
    }

    var cache = this.cache;
    while (cache.length <= level) {
        this._buildLevel();
    }

    return cache[level].xpFloor;
};

module.exports = new Calculator();
