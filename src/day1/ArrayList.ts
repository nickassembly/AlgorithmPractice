export default class ArrayList<T> {
    // array list are great for push / pop 0(1)
    // array list are not good for unshift/shift or enqueue / dequeue 0(n)
    // enqueue vs push (enqueue inserts at the beginning and needs to walk the entire list after)
    //                 (push inserts at the end so O(1) at the end, doesn't need to walk the list)

    public length: number;

    constructor() {}

    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
