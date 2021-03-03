import { Deque } from '@/data-structures/deques/deque-protocols'

export class DequeObject implements Deque {
  private items: { [index: number]: any}
  private firstPosition: number
  private lastPosition: number

  constructor (items?: any[]) {
    this.items = {}
    this.firstPosition = 0
    items?.forEach((value, index) => { this.items[index] = value })
    this.lastPosition = items ? this.size() - 1 : 0
  }

  removeBack (): any {
    const item = this.items[this.lastPosition]
    delete this.items[this.lastPosition--]
    return item
  }

  removeFront (): any {
    const item = this.items[this.firstPosition]
    delete this.items[this.firstPosition++]
    return item
  }

  addBack (item: any): void {
    this.items[++this.lastPosition] = item
  }

  addFront (item: any): void {
    this.items[--this.firstPosition] = item
  }

  size (): number {
    return Object.keys(this.items).length
  }

  getItems (): any[] {
    // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
    return Object
      .keys(this.items)
      .map(item => Number(item))
      .sort()
      .map(index => this.items[index])
  }

  clear (): void {
    this.items = {}
  }

  isEmpty (): boolean {
    return Object.keys(this.items).length === 0
  }
}
