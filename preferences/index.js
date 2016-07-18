'use strict';

var Jo = require('jojen');
var _ = require('lodash');

var preferences = {
    user: {
        'chat:sounds:play': {
            schema: Jo.string().max(50),
            default: 'whoosh'
        },
        'chat:sounds:html5': {
            schema: Jo.boolean(),
            default: true
        },
        'chat:timestamps': {
            schema: Jo.boolean(),
            default: false
        },
        'chat:whispers': {
            schema: Jo.boolean(),
            default: true
        },
        'chat:chromakey': {
            schema: Jo.boolean(),
            default: true
        },
        'chat:lurkmode': {
            schema: Jo.boolean(),
            default: false
        },
        'channel:notifications': {
            schema: Jo.object().keys({
                ids: Jo.array().required(),
                transports: Jo.array().required()
            }),
            default: {
                ids: ['*'],
                transports: ['notify', 'email']
            }
        },
        'channel:mature:allowed': {
            schema: Jo.boolean(),
            default: false
        },
        'channel:player': {
            schema: Jo.object().keys({
                vod: Jo.valid('light', 'flash'),
                rtmp: Jo.valid('light', 'flash'),
                ftl: Jo.valid('light', 'flash')
            }),
            default: {
                vod: 'light',
                rtmp: 'light',
                ftl: 'light'
            }
        },
        'chat:tagging': {
            schema: Jo.boolean(),
            default: true
        },
        'chat:colors': {
            schema: Jo.boolean(),
            default: true
        },
        'chat:sounds:volume': {
            schema: Jo.number().min(0).max(1),
            default: 1
        }
    },
    channel: {
        'costream:allow': {
            schema: Jo.valid('all', 'following', 'none'),
            default: 'all'
        },
        sharetext: {
            schema: Jo.string(),
            default: 'I\'m watching %USER%\'s awesome stream. Come check it out here: %URL%'
        },
        'channel:links:clickable': {
            schema: Jo.boolean(),
            default: true
        },
        'channel:links:allowed': {
            schema: Jo.boolean(),
            default: true
        },
        'channel:slowchat': {
            schema: Jo.number().integer().min(0),
            default: 500
        },
        'channel:notify:follow': {
            schema: Jo.boolean(),
            default: false
        },
        'channel:notify:followmessage': {
            schema: Jo.string(),
            default: '%USER% is now following.'
        },
        'channel:notify:hostedBy': {
            schema: Jo.string().allow(null),
            default: '%USER% is now hosting you!'
        },
        'channel:notify:hosting': {
            schema: Jo.string().allow(null),
            default: 'We\'re now hosting %USER%!'
        },
        'channel:notify:subscribemessage': {
            schema: Jo.string(),
            default: '%USER% subscribed to the channel!'
        },
        'channel:notify:subscribe': {
            schema: Jo.boolean(),
            default: true
        },
        'channel:partner:submail': {
            schema: Jo.string(),
            default: 'Welcome to my channel, thanks for subscribing.'
        },
        'channel:player:muteOwn': {
            schema: Jo.boolean(),
            default: true
        },
        'channel:tweet:enabled': {
            schema: Jo.boolean(),
            default: false
        },
        'channel:tweet:body': {
            schema: Jo.string(),
            default: 'I just went live on Beam! %URL%'
        }
    }
};
/**
 * @typedef {Object} Preference
 * @property {Object} default
 * @property {Jo.Schema} schema
 */

/**
 * Preferences provides an interface for enumerate and validating preference
 * objects.
     * @param  {Object.<String, Preference>} prefs
 */
function Preferences (prefs) {
    prefs = prefs || preferences;

    // The following block converts the types to maps of preferences to
    // a map of types to objects that contain the preference defaults
    // and a schema used to validate them.
    this._prefs = _.mapValues(prefs, function (list) {
        var defaults = {};
        var schema = {};
        _.forEach(list, function (preference, name) {
            defaults[name] = preference.default;
            schema[name] = preference.schema.default(preference.default);
        });

        return {
            defaults: defaults,
            schema: Jo.object().keys(schema)
        };
    });
}

/**
 * Returns a preference object associated with the type.
 * @param  {String} type
 * @return {{defaults: Object, schema: Jojen.Schema}}
 * @throws {Error} If the type does not exist.
 */
Preferences.prototype._getType = function (type) {
    if (!this.exists(type)) {
        throw new Error('Unknown preference type ' + type);
    }

    return this._prefs[type];
};

/**
 * Returns whether the preference type exists and, optionally, has
 * a certain key.
 * @param  {String}  type
 * @param  {String}  [key]
 * @return {Boolean}
 */
Preferences.prototype.exists = function (type, key) {
    if (!this._prefs.hasOwnProperty(type)) {
        return false;
    }

    if (key === undefined) {
        return true;
    }

    return this._prefs[type].defaults.hasOwnProperty(key);
};

/**
 * Returns the default value for the preference of a certain type.
 * @param  {String} type
 * @param  {String} key
 * @return {Object}
 */
Preferences.prototype.getDefaults = function (type, key) {
    return this._getType(type).defaults[key];
};

/**
 * Attempts to validate the preference object.
 * @param  {String} type
 * @param  {Object} obj
 * @throws {Jojen.ValidationError} If it's invalid
 */
Preferences.prototype.assert = function (type, obj) {
    Jo.assert(obj, this._getType(type).schema);
};

/**
 * Fills in default values for the type of preference on the object.
 * @param  {String} type
 * @param  {Object} object
 * @return {Object}
 */
Preferences.prototype.defaults = function (type, object) {
    return _.assign({}, this._getType(type).defaults, object);
};

module.exports = new Preferences();
module.exports.Preferences = Preferences;
