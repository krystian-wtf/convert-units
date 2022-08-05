"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SI = {
    Nm: {
        name: {
            singular: 'Newton Metre',
            plural: 'Newton Metres',
        },
        to_anchor: 1,
    },
};
var imperial = {
    'lb-ft': {
        name: {
            singular: 'Pound-foot',
            plural: 'Pound-feet',
        },
        to_anchor: 1,
    },
    'kip-ft': {
        name: {
            singular: 'Kilopound-foot',
            plural: 'Kilopound-feet',
        },
        to_anchor: 1000,
    },
};
var measure = {
    systems: {
        SI: SI,
        imperial: imperial,
    },
    anchors: {
        SI: {
            imperial: {
                ratio: 1 / 1.355818,
            },
        },
        imperial: {
            SI: {
                ratio: 1.355818,
            },
        },
    },
};
exports.default = measure;
