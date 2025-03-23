"use strict";
// Problem 8
function validateKeys(obj, keys) {
    return keys.every(k => k in obj);
}
