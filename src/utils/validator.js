import { t } from '@/services/language.service';

class Validator {
    /**
     * @type {*}
     * @private
     */
    _value;

    /**
     * @typedef {Array<Function>} ValidatorRules
     * @type {ValidatorRules}
     * @private
     */
    _rules;

    /**
     * @typedef {Array<String>} ValidatorErrors
     * @type {ValidatorErrors}
     * @private
     */
    _errors;

    /**
     * @param {*} value
     * @param {ValidatorRules} rules
     */
    constructor(value, rules) {
        this._value = value;
        this._rules = rules;
        this._errors = [];
    }

    /**
     * @returns {Boolean}
     */
    passes() {
        return this.errors().length === 0;
    }

    /**
     * @returns {Boolean}
     */
    fails() {
        return !this.passes();
    }

    /**
     * @returns {ValidatorErrors}
     */
    errors() {
        this._validate();

        return this._errors;
    }

    /**
     * @param {*} value
     * @returns void
     */
    setValue(value) {
        this._value = value;
    }

    /**
     * @param {ValidatorRules} rules
     * @returns void
     */
    setRules(rules) {
        this._rules = rules;
    }

    /**
     * @returns void
     */
    _validate() {
        const errors = [];

        for (const rule of this._rules) {
            const result = rule(this._value);

            if (typeof result === 'string') {
                errors.push(result);
            }
        }

        this._errors = errors;
    }

    /**
     * @param {String} [message]
     * @returns {Function}
     */
    static required(message) {
        return function(value) {
            if (value === null || value === undefined || value === '') {
                return message || t('This field is required!');
            }

            return true;
        };
    }
    /**
     * @param {String} [message]
     * @returns {Function}
     */
    static nationalCode(message) {
        return function(value) {
            const text = message || t('The national code is not valid')

            if (!value) {
                return text;
            }
            let sum = 0;

            for (let index = 0; index < value.length - 1; index++) {
                const position = value.length - index;
                sum += value[index] * position;
            }

            const controlNumber = Number(value[value.length - 1]);
            const remaining = sum % 11;
            if (value.length !== 10 || ((remaining < 2) ? (controlNumber !== remaining) : (controlNumber !== (11 - remaining)))) {
                return text;
            }
            return true;
        };
    }

    /**
     * @param {Number} length
     * @param {String} [message]
     * @returns {Function}
     */
    static length(length, message) {
        return function(value) {
            if (typeof value === 'string' && value.length === length) {
                return true;
            }

            return message || t('This field should contain {number} digits', {number: length});
        };
    }

    /**
     * @param {String} [message]
     * @returns {Function}
     */
    static mobile(message) {
        return function(value) {
            const mobileRegex = /^([\\+]|00)?[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{5,6}$/;
            if (!mobileRegex.test(value)) {
                return message || t('The mobile number is not correct')
            }
        return true;
        };
    }

    /**
     * @param {Number} min
     * @param {String} [message]
     * @returns {Function}
     */
    static minLength(min, message) {
        return function(value) {
            if (typeof value === 'string' && value.length >= min) {
                return true;
            }

            return message || t('Validation error message');
        };
    }
}

export default Validator;
