# set
Set is a simple generic data structure representing a set.
It has an iterator built in and manages dupliates.

## Methods
```typescript
/**
 * Adds a value to the set if the value does not already exist.
 * @param value A new unique value to be added to the set.
 */
add(value: T): void;

/**
* Remove a specific value form the set.
* @param value The value to be removed
*/
remove(value: T): void;

/**
* Check if the set contains a specific value.
* @param value The value to search for.
* @returns {boolean} Whether the value is in the set.
*/
contains(value: T): boolean;

/**
* Convert the set to a native array.
* @returns {T[]} A new Array.
*/
toArray(): T[];

/**
* Convert the set to an ArrayList.
* @returns {ArrayList<T>} A new ArrayList.
*/
toArrayList(): ArrayList<T>;

/**
* Populate the set with a native Array. Duplicates will not be added to the set.
* @param value An Array to populate the set from.
*/
fromArray(value: T[]): void;
```