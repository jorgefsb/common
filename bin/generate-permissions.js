#!/usr/bin/env node
'use strict';

// This file also serves as a test since it asserts the presence of role descriptions.

const fs = require('fs');
const path = require('path');
const roleList = require('../roles').list;
const _ = require('lodash');


let currentPermissions;
try {
    currentPermissions = require('../permissions.json');
} catch (error) {
    console.error('Permissions definition file does not exist is is broke');
    throw error;
}

// fetch all known permissions from roles.
const permissionList = _(roleList)
.map('permissions')
.flatten()
.uniq()
.sort()
.value();

const missing = _.difference(permissionList, Object.keys(currentPermissions));
if (missing.length) {
    console.error('A few permissions lack descriptions, they have been added with a dummy body');
    missing.forEach(perm => {
        currentPermissions[perm] = { text: 'REPLACEME!' };
    });
    fs.writeFileSync(
        path.join(__dirname, '../', 'permissions.json'),
        JSON.stringify(currentPermissions, null, '    ')
    );
}

