"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    // Example Date 14/01/2020 --> ['14', '01', '2020'] --> [14, 01, 2020]
    var dateParts = dateString
        .split('/')
        .map(function (value) { return parseInt(value); });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
