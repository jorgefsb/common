/**
 * Returns the maximum number of emoticons allowed based on subscriber count.
 *
 * @param  {Number} count Subscriber count
 * @param  {Boolean} isPartner Factor in that the channel is a parnered.
 * @return {Number}
 */
exports.getMaximumEmoticons = function getMaximumEmoticons (count, isPartner) {
    var bonus = 0;
    if (isPartner) {
        bonus += 2;
    }
    if (count >= 1000) return 20 + bonus;
    if (count >= 750) return 18 + bonus;
    if (count >= 500) return 16 + bonus;
    if (count >= 250) return 14 + bonus;
    if (count >= 150) return 12 + bonus;
    if (count >= 100) return 10 + bonus;
    if (count >= 60) return 8 + bonus;
    if (count >= 30) return 6 + bonus;
    if (count >= 15) return 4 + bonus;
    if (count >= 5) return 2 + bonus;
    return bonus;
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
