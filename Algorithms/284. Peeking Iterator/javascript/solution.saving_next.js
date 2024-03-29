/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
    this._next = iterator.next();
    this._iterator = iterator;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
    return this._next;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
    if (this._next === null) {
        return null;
    }
    const toReturn = this._next;
    this._next = null;
    if (this._iterator.hasNext()) {
        this._next = this._iterator.next();
    }
    return toReturn;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
    return this._next !== null;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
