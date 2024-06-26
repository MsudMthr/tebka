import {reflow, executeAfterTransition} from 'bootstrap/js/src/util';
import {useI18n} from "vue-i18n";

function hasOwnProperty(object, key) {
    return Object.prototype.hasOwnProperty.call(object, key);
}

function isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}

function isEmptyObject(value) {
    for (const property in value) {
        if (hasOwnProperty(value, property)) {
            return false;
        }
    }

    return true;
}

function isEmpty(value) {
    if (Array.isArray(value)) {
        return value.length === 0;
    }

    if (isObject(value)) {
        return isEmptyObject(value);
    }

    return value === undefined || value === null || value === '';
}

function isWritableFormElement(type) {
    return /^(?:text|email|number|search|tel|url|password)$/i.test(type);
}

let uniqueIdCount = 0;

function getUniqueId() {
    return 'uid_' + uniqueIdCount++;
}

/**
 * @param {Null|String|Function} iteratee
 * @returns {function(*): *}
 */
function resolveIteratee(iteratee) {
    if (iteratee === null) {
        return value => value;
    }

    if (typeof iteratee === 'string') {
        return object => object[iteratee];
    }

    return iteratee;
}

function keyBy(array, iteratee) {
    iteratee = resolveIteratee(iteratee);

    const result = {};

    for (const item of array) {
        result[iteratee(item)] = item;
    }

    return result;
}

/**
 * @param asyncFunction
 * @returns {function(): Promise}
 */
function cachePromise(asyncFunction) {
    let fetched = false;
    let promise = null;

    return function (...args) {
        if (fetched) {
            return promise;
        }

        fetched = true;

        promise = asyncFunction.apply(this, args);

        return promise;
    };
}

function normalizeData(value) {
    if (value === 'true') {
        return true;
    }

    if (value === 'false') {
        return false;
    }

    const valueAsNumber = Number(value);

    if (value === valueAsNumber.toString()) {
        return valueAsNumber;
    }

    if (value === 'null') {
        return null;
    }

    return value;
}

const delimiterPrice = ',';

const priceFormatter = (number) => {
    // this dirty code write for iraq project
        number = Number(number) && parseInt(Number(number) / 10);


    if (isNaN(number)) return 'نامشخص';

    number = String(number).replace(/./g, (currentChar, index, str) => {
        if (number < 0 && index == 1) return currentChar;

        return index && (currentChar !== '.') && ((str.length - index) % 3 === 0) ? (delimiterPrice + currentChar) : currentChar;
    });

    return number;
};


export {
    reflow,
    executeAfterTransition,
    hasOwnProperty,
    isObject,
    isEmptyObject,
    isEmpty,
    isWritableFormElement,
    getUniqueId,
    resolveIteratee,
    keyBy,
    priceFormatter,
    cachePromise,
    normalizeData
};
