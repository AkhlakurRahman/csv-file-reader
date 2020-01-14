"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchSummary = /** @class */ (function () {
    function MatchSummary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    MatchSummary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return MatchSummary;
}());
exports.MatchSummary = MatchSummary;
