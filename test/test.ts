'use strict';
import test = require('blue-tape');

import validUrl = require('valid-url');

const invalidUrl: string = 'not-valid';
const realUrl: string = 'https://www.google.com/';

test('default example', (t) => {
    t.equal(validUrl.isUri(realUrl), realUrl);
    t.equal(validUrl.isUri(invalidUrl), undefined);

    t.end();
});

test('returns string', (t) => {
    let returnedRealUrl = validUrl.isUri(realUrl);
    if (typeof returnedRealUrl === 'string') {
        returnedRealUrl.substring(4);
    }

    t.end();
});
