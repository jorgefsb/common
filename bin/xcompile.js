'use strict';

const child = require('child_process');
const async = require('async');
const path = require('path');
const fs = require('fs');

const roles = require('../roles');
const xp = require('../xp');

/**
 * Creates a pipe that can be used to write Go code to a source file.
 * @param  {String} target file name to write out
 * @param  {Function} callback to be invoked after the writeable stream is closed
 * @return {WriteableStream}
 */
function file (target, callback) {
    const fmt = child.spawn('gofmt');
    const fpath = path.join(__dirname, '../', `go/bcommon/${target}`);
    const write = fs.createWriteStream(fpath);
    fmt.stderr.pipe(process.stderr);
    fmt.stdout.pipe(write);
    fmt.on('exit', (code) => {
        if (code > 0) callback(undefined, code);
    });

    write.on('close', () => {
        callback(undefined, 0);
    });

    fmt.stdin.write(`
        // AUTOGENERATED FILE, DO NOT EDIT

        package bcommon
    `);
    return fmt.stdin;
}

/**
 * compileRoles evaluates and compiles the roles to Go.
 * @param {string} target Target file name
 * @param {Function} callback Callbacks with exit code.
 */
function compileRoles (target, callback) {
    const pipe = file(target, callback);

    pipe.write(`
        var (
    `);

    const names = {};

    /**
     * fmtPermission formats a permission separated by colons into a StudlyCase
     * variable.
     * @param {String} perm
     * @return {String}
     */
    const fmtPermission = (perm) => {
        const parts = perm.split(/[:_]/).map(p => p[0].toUpperCase() + p.slice(1));

        if (parts[parts.length - 1] === 'Self') {
            const base = parts.slice(0, -1).join('');
            names[base] = perm.slice(0, -':self'.length);
            return `${parts.slice(0, -1).join('')} + ":self"`;
        }

        const out = parts.join('');
        names[out] = perm;
        return out;
    };


    Object.keys(roles.list).forEach(key => {
        const role = roles.list[key];
        const perms = roles.getPermissions([key])
            .slice()
            .sort()
            .map(item => `${fmtPermission(item)},\n`)
            .join('');

        pipe.write(`
            ${role.name} = &Role{
                Name: "${role.name}",
                Exclusivity: ${role.exclusivity | 0},
                Level: ${role.level},
                Permissions: []string{\n${perms}},
            }`
        );
    });

    pipe.write(`
        )

        const (
    `);

    Object.keys(names).sort().forEach(key => {
        pipe.write(`${key} = "${names[key]}"\n`);
    });

    pipe.write(`
        )

        var RoleMap = map[string]*Role{
    `);

    Object.keys(roles.list).forEach(name => {
        pipe.write(`"${name}": ${name},\n`);
    });

    pipe.write('}');
    pipe.end();
}

exports.compileRoles = compileRoles;

/**
 * Compiles the experience table to a Go file.
 * @param  {String}   target
 * @param  {Function} callback
 */
function compileXpTable (target, callback) {
    const pipe = file(target, callback);

    pipe.write(`
        var xpTable = []uint{
    `);

    const maxLevel = 150; // ~200 years of watching to each level 150
    const levelsPerRow = 10;

    for (let i = 0; i < maxLevel; i += levelsPerRow) {
        for (let k = 0; k < levelsPerRow; k++) {
            pipe.write(`${xp.getXp(i + k) || 0}, `);
        }
        pipe.write('\n');
    }

    pipe.write('\n}');
    pipe.end();
}

exports.compileXpTable = compileXpTable;


if (require.main === module) {
    async.parallel([
        (cb) => compileRoles('roles.go', cb),
        (cb) => compileXpTable('xpTable.go', cb),
    ], (err, res) => process.exit(res.reduce((a, b) => a | b)));
}
