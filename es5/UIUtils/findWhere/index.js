"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = findWhere;
/**
 * Searches and returns the first occurence of an array item with the given property.
 * @module UIKit/utils/findWhere
 */

var _findWhereIndex = null;

/**
 * @param  {Array[Object]} array     an array of objects
 * @param  {String}        property  the name of the property to match against
 * @param  {*}             value     the value to match against (uses strict equality)
 *
 * @return {Object|undefined} The matched array item, or nothing.
 */
function findWhere(array, property, value) {
    _findWhereIndex = array.length - 1;

    while (_findWhereIndex > -1) {
        if (array[_findWhereIndex][property] === value) {
            return array[_findWhereIndex];
        }

        _findWhereIndex -= 1;
    }
} // optimized specifically to only look for a single key:value match

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1VJVXRpbHMvZmluZFdoZXJlL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O2tCQWN3QixTQUFTOzs7Ozs7QUFUakMsSUFBSSxlQUFlLEdBQUcsSUFBSTs7Ozs7Ozs7O0FBQUMsQUFTWixTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtBQUN0RCxtQkFBZSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOztBQUVuQyxXQUFPLGVBQWUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUN6QixZQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDNUMsbUJBQU8sS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2pDOztBQUVELHVCQUFlLElBQUksQ0FBQyxDQUFDO0tBQ3hCO0NBQ0o7QUFBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2VhcmNoZXMgYW5kIHJldHVybnMgdGhlIGZpcnN0IG9jY3VyZW5jZSBvZiBhbiBhcnJheSBpdGVtIHdpdGggdGhlIGdpdmVuIHByb3BlcnR5LlxuICogQG1vZHVsZSBVSUtpdC91dGlscy9maW5kV2hlcmVcbiAqL1xuXG5sZXQgX2ZpbmRXaGVyZUluZGV4ID0gbnVsbDtcblxuLyoqXG4gKiBAcGFyYW0gIHtBcnJheVtPYmplY3RdfSBhcnJheSAgICAgYW4gYXJyYXkgb2Ygb2JqZWN0c1xuICogQHBhcmFtICB7U3RyaW5nfSAgICAgICAgcHJvcGVydHkgIHRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBtYXRjaCBhZ2FpbnN0XG4gKiBAcGFyYW0gIHsqfSAgICAgICAgICAgICB2YWx1ZSAgICAgdGhlIHZhbHVlIHRvIG1hdGNoIGFnYWluc3QgKHVzZXMgc3RyaWN0IGVxdWFsaXR5KVxuICpcbiAqIEByZXR1cm4ge09iamVjdHx1bmRlZmluZWR9IFRoZSBtYXRjaGVkIGFycmF5IGl0ZW0sIG9yIG5vdGhpbmcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmRXaGVyZShhcnJheSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgX2ZpbmRXaGVyZUluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMTtcblxuICAgIHdoaWxlIChfZmluZFdoZXJlSW5kZXggPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXlbX2ZpbmRXaGVyZUluZGV4XVtwcm9wZXJ0eV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyYXlbX2ZpbmRXaGVyZUluZGV4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9maW5kV2hlcmVJbmRleCAtPSAxO1xuICAgIH1cbn0gLy8gb3B0aW1pemVkIHNwZWNpZmljYWxseSB0byBvbmx5IGxvb2sgZm9yIGEgc2luZ2xlIGtleTp2YWx1ZSBtYXRjaFxuIl19