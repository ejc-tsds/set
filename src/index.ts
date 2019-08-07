/**
 *
 * Elijah Cobb
 * elijah@elijahcobb.com
 * https://elijahcobb.com
 *
 */

import { ArrayList } from "@ejc-tsds/arraylist";

export class Set<T> {

	private list: ArrayList<T>;

	public constructor(...values: T[]) {

		this.list = new ArrayList<T>(...values);


	}

	public add(value: T): void {

		if (this.list.contains(value)) return;
		this.list.add(value);

	}

	public remove(value: T): void {

		this.list.removeValue(value);

	}

	public contains(value: T): boolean {

		return this.list.contains(value);

	}

	public toArray(): T[] {

		return this.list.toArray();

	}

	public fromArray(value: T[]): void {

		this.list.fromArray(value);

	}

}