/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { ArrayList } from "@ejc-tsds/arraylist";
import { Iter } from "@ejc-tsds/iter";

export class Set<T> extends Iter<T> {

	private list: ArrayList<T>;

	/**
	 * Create a new instance of a Set passing in values of type T.
	 * @param values An array of types T using the spread operator.
	 */
	public constructor(...values: T[]) {

		super();
		this.list = new ArrayList<T>(...values);

	}

	/**
	 * A protected function to allow a set to be iterable. Gets a value for a specific index.
	 * @param index The index of the value to retrieve.
	 * @returns {T} The object as a defined value.
	 */
	protected iterHandler(index: number): T {

		return this.list.get(index) as T;

	}


	/**
	 * A protected function to allow a set to be iterable. Gets the size of the set.
	 * @returns {number} The size of the set to iterate over.
	 */
	protected iterSize(): number {

		return this.list.size();

	}

	/**
	 * Adds a value to the set if the value does not already exist.
	 * @param value A new unique value to be added to the set.
	 */
	public add(value: T): void {

		if (this.list.contains(value)) return;
		this.list.add(value);

	}

	/**
	 * Remove a specific value form the set.
	 * @param value The value to be removed
	 */
	public remove(value: T): void {

		this.list.removeValue(value);

	}

	/**
	 * Check if the set contains a specific value.
	 * @param value The value to search for.
	 * @returns {boolean} Whether the value is in the set.
	 */
	public contains(value: T): boolean {

		return this.list.contains(value);

	}


	/**
	 * Convert the set to a native array.
	 * @returns {T[]} A new Array.
	 */
	public toArray(): T[] {

		return this.list.toArray();

	}


	/**
	 * Convert the set to an ArrayList.
	 * @returns {ArrayList<T>} A new ArrayList.
	 */
	public toArrayList(): ArrayList<T> {

		return this.list;

	}

	/**
	 * Populate the set with a native Array. Duplicates will not be added to the set.
	 * @param value An Array to populate the set from.
	 */
	public fromArray(value: T[]): void {

		this.list = new ArrayList<T>();
		for (const v of value) this.add(v);

	}

}