
// Dom
import Manipulator from 'bootstrap/js/src/dom/manipulator';

/**
 * @param {HTMLElement} target
 * @returns {Object}
 */
export function useScrollBar(target= document.body) {

    function getWidth() {
        const documentWidth = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - documentWidth);
    }

    function saveInitialAttribute(element, name) {
        const value = element.style[name];

        if (value) {
            Manipulator.setDataAttribute(element, name, value);
        }
    }

    function setElementAttributes(element, name, callback) {
        const scrollbarWidth = getWidth();

        if (element !== target && window.innerWidth > element.clientWidth + scrollbarWidth) {
            return;
        }

        saveInitialAttribute(element, name);

        const value = window.getComputedStyle(element)[name];
        element.style[name] = `${callback(Number.parseFloat(value))}px`;
    }

    function resetElementAttributes(element, name) {
        const value = Manipulator.getDataAttribute(element, name);

        if (typeof value === 'undefined') {
            element.style.removeProperty(name);
        } else {
            Manipulator.removeDataAttribute(element, name);
            element.style[name] = value;
        }
    }

    function hide() {
        const width = getWidth();

        saveInitialAttribute(target, 'overflow');
        target.style.overflow = 'hidden';

        setElementAttributes(target, 'paddingRight', (value) => value + width);
    }

    function reset() {
        resetElementAttributes(target, 'overflow');
        resetElementAttributes(target, 'paddingRight');
    }

    return {
        hide,
        reset
    };
}
