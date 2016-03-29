/**
 * Returns the maximum number of emoticons allowed based on subscriber count.
 *
 * @param  {Number} count Subscriber count
 * @return {Number}
 */
exports.getMaximumEmoticons = function getMaximumEmoticons (count) {
    if (count >= 1000) return 22;
    if (count >= 750) return 20;
    if (count >= 500) return 18;
    if (count >= 250) return 16;
    if (count >= 150) return 14;
    if (count >= 100) return 12;
    if (count >= 60) return 10;
    if (count >= 30) return 8;
    if (count >= 15) return 6;
    if (count >= 5) return 4;
    return 2;
};

/**
 * Returns how many more subscribers are required to get more emotes.
 * @param {Number} count Subscriber count
 * @return {Number}
 */
exports.getSubsToNextEmote = function getSubsToNextEmote (count) {
    if (count >= 1000) return 0;
    if (count >= 750) return 1000 - count;
    if (count >= 500) return 750 - count;
    if (count >= 250) return 500 - count;
    if (count >= 150) return 250 - count;
    if (count >= 100) return 150 - count;
    if (count >= 60) return 100 - count;
    if (count >= 30) return 60 - count;
    if (count >= 15) return 30 - count;
    if (count >= 5) return 15 - count;
    return 5 - count;
};
