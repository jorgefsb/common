var _ = require('lodash');

module.exports = {
    /**
     * Returns chat options from the object, discarding all other data, and
     * casting appropriately.
     *
     * @param  {Object} data
     * @param  {Boolean} shouldCast Whether datatypes should be cast (from Redis)
     * @return {Object}
     */
    pickOptions: function (data, shouldCast) {
        var output = _.pick(data, [
            'slowchat',
            'linksAllowed',
            'linksClickable'
        ]);


        if (shouldCast) {
            // Redis stores everything as strings... parse floats and booleans
            // if required.
            output.slowchat = parseFloat(output.slowchat, 10) || 0.5;
            output.linksClickable = output.linksClickable !== 'false';
            output.linksAllowed = output.linksAllowed !== 'false';
        }

        return output;
    },
    // Regex used to match links for replacement. Source:
    // http://recurial.com/programming/javascript-snippet-replace-urls-with-hyperlinks/
    linkMatch = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
}
