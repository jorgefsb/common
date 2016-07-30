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

    it('returns whether preferences exist', function () {
        expect(prefs.exists('foo')).to.be.true;
        expect(prefs.exists('bar')).to.be.false;
        expect(prefs.exists('foo', 'a')).to.be.true;
        expect(prefs.exists('foo', 'b')).to.be.false;
    });

    it('gets preference defaults', function () {
        expect(prefs.getDefaults('foo', 'a')).to.equal('a value');
    });

    it('should not magically add defaults', function () {
        var o = { a: undefined };
        prefs.assert('foo', o);
        expect(o.a).to.be.undefined;
    });

    it('throws on unknown types', function () {
        expect(function () { prefs.defaults('bar', {}); }).to.throw(/Unknown preference type/);
        expect(function () { prefs.assert('bar', {}); }).to.throw(/Unknown preference type/);
        expect(function () { prefs.getDefaults('bar', {}); }).to.throw(/Unknown preference type/);
    });
});
