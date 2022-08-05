(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SI = {
        N: {
            name: {
                singular: 'Newton',
                plural: 'Newtons',
            },
            to_anchor: 1,
        },
        kN: {
            name: {
                singular: 'Kilonewton',
                plural: 'Kilonewtons',
            },
            to_anchor: 1000,
        },
        lbf: {
            name: {
                singular: 'Pound-force',
                plural: 'Pound-force',
            },
            to_anchor: 4.4482216,
        },
        kip: {
            name: {
                singular: 'Kip-force',
                plural: 'Kip-force',
            },
            to_anchor: 4448.2216,
        },
        'ton-f-us': {
            name: {
                singular: 'Ton-force US',
                plural: 'Ton-force US',
            },
            to_anchor: 8896.443230521,
        },
        'tonne-f-metric': {
            name: {
                singular: 'Tonne-force',
                plural: 'Tonne-force',
            },
            to_anchor: 9806.65,
        },
    };
    var measure = {
        systems: {
            SI: SI,
        },
    };
    exports.default = measure;
});
