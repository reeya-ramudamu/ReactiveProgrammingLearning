"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newMessage$ = void 0;
var rxjs_1 = require("rxjs");
// Observable for new messages
exports.newMessage$ = new rxjs_1.Observable(function (subscriber) {
    // Simulate receiving new messages
    setInterval(function () {
        subscriber.next('New message received');
    }, 3000);
});
