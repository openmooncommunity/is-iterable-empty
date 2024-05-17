/**
 * Checks if an iterable is empty.
 *
 * @param {Iterable} iterable - The iterable to check.
 * @returns {boolean} True if the iterable is empty, otherwise false.
 */
function isIterableEmpty(iterable) {
    if (iterable == null || typeof iterable[Symbol.iterator] !== 'function') {
        throw new TypeError('Argument is not an iterable');
    }

    for (const _ of iterable) {
        return false;
    }
    return true;
}

module.exports = isIterableEmpty;
