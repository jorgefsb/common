var Preferences = require('../preferences').Preferences;
var Jo = require('jojen');

var expect = require('chai').expect;

describe('preferences', function () {
    var prefs;

    beforeEach(function () {
        prefs = new Preferences({
            foo: {
                a: {
                    schema: Jo.string(),
                    default: 'a value'
                }
            }
        });
    });

    it('creates defaults correctly', function () {
        expect(prefs.defaults('foo', {})).to.deep.equal({ a: 'a value' });
        expect(prefs.defaults('foo', { a: ':)' })).to.deep.equal({ a: ':)' });
    });

    it('validates values', function () {
        expect(function () { prefs.assert('foo', {}); }).not.to.throw;
        expect(function () { prefs.assert('foo', { unknown: 'asdf' }); }).to.throw;
        expect(function () { prefs.assert('foo', { a: 42 }); }).to.throw;
        expect(function () { prefs.assert('foo', { a: ':)' }); }).not.to.throw;
    });

    it('throws on unknown types', function () {
        expect(function () { prefs.defaults('bar', {}); }).to.throw(/Unknown preference type/);
        expect(function () { prefs.assert('bar', {}); }).to.throw(/Unknown preference type/);
    });
});
