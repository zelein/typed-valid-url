"use strict";
import test = require('blue-tape');

import validUrl = require('valid-url');


test("default example", (t) => {
    const invalidUrl: string = "not-valid";
    const realUrl: string = "https://www.google.com/";
    t.equal(validUrl.isUri(realUrl), realUrl);
    t.equal(validUrl.isUri(invalidUrl), undefined);

    t.end();
});