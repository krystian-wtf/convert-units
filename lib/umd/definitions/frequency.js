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
        mHz: {
            name: {
                singular: 'millihertz',
                plural: 'millihertz',
            },
            to_anchor: 1 / 1000,
        },
        Hz: {
            name: {
                singular: 'hertz',
                plural: 'hertz',
            },
            to_anchor: 1,
        },
        kHz: {
            name: {
                singular: 'kilohertz',
                plural: 'kilohertz',
            },
            to_anchor: 1000,
        },
        MHz: {
            name: {
                singular: 'megahertz',
                plural: 'megahertz',
            },
            to_anchor: 1000 * 1000,
        },
        GHz: {
            name: {
                singular: 'gigahertz',
                plural: 'gigahertz',
            },
            to_anchor: 1000 * 1000 * 1000,
        },
        THz: {
            name: {
                singular: 'terahertz',
                plural: 'terahertz',
            },
            to_anchor: 1000 * 1000 * 1000 * 1000,
        },
        rps: {
            name: {
                singular: 'rotation per second',
                plural: 'rotations per seconds',
            },
            to_anchor: 1,
        },
        rpm: {
            name: {
                singular: 'rotation per minute',
                plural: 'rotations per minute',
            },
            to_anchor: 1 / 60,
        },
        'deg/s': {
            name: {
                singular: 'degree per second',
                plural: 'degrees per second',
            },
            to_anchor: 1 / 360,
        },
        'rad/s': {
            name: {
                singular: 'radian per second',
                plural: 'radians per second',
            },
            to_anchor: 1 / (Math.PI * 2),
        },
    };
    var measure = {
        systems: {
            SI: SI,
        },
    };
    exports.default = measure;
});