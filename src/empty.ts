import latest from './reference/latest';
import {StyleSpecification} from './types.g';

export default function emptyStyle(): StyleSpecification {
    const style = {};

    const version = latest['$version'];
    for (const styleKey in latest['$root']) {
        const spec = latest['$root'][styleKey];

        if (spec.required) {
            let value = null;
            if (styleKey === 'version') {
                value = version;
            } else {
                if (spec.type === 'array') {
                    value = [];
                } else {
                    value = {};
                }
            }

            if (value != null) {
                style[styleKey] = value;
            }
        }
    }

    return style as StyleSpecification;
}
