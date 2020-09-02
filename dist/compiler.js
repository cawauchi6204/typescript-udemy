"use strict";
function echo(message) {
    return message;
}
let implicitAny;
implicitAny = 'implicitAny';
let nullableMessage = echo('hi');
let undefinedableMessage = undefined;
let onlyNull = null;
let onlyUndefined = undefined;
if (nullableMessage) {
    nullableMessage.toUpperCase();
}
const newFunction = echo.call(null, 'hi');
