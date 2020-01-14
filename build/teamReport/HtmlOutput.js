"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var HtmlOutput = /** @class */ (function () {
    function HtmlOutput() {
    }
    HtmlOutput.prototype.print = function (report) {
        var html = "\n      <div>\n        <h3>Match Summary</h3>\n        <p>" + report + "</p>\n      </div>\n    ";
        fs_1.writeFileSync('report.html', html);
    };
    return HtmlOutput;
}());
exports.HtmlOutput = HtmlOutput;
