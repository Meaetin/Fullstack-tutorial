import prod from './prod.js';
import dev from './dev.js';

let defaultExport;

if (process.env.NODE_ENV === "production") {
    defaultExport = prod;
} else {
    defaultExport = dev;
}

export default defaultExport;