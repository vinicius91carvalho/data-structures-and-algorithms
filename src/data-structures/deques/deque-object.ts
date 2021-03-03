import 'module-alias/register'
import { Deque } from '@/data-structures/deques/deque-protocols'
import { deepCopy } from '@/helpers/util'

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

  private calcRightPosition (newValue: number, oldValue: number): number {
    return this.size() > 0 ? newValue : oldValue
  }

  peekBack (): any {
    return deepCopy(this.items[this.lastPosition])
  }

  peekFront (): any {
    return deepCopy(this.items[this.firstPosition])
  }

  removeBack (): any {
    const item = this.items[this.lastPosition]
    delete this.items[this.lastPosition]
    this.lastPosition = this.calcRightPosition(this.lastPosition - 1, this.lastPosition)
    return item
  }

  removeFront (): any {
    const item = this.items[this.firstPosition]
    delete this.items[this.firstPosition]
    this.firstPosition = this.calcRightPosition(this.firstPosition + 1, this.firstPosition)
    return item
  }

  addBack (item: any): void {
    this.lastPosition = this.calcRightPosition(this.lastPosition + 1, this.lastPosition)
    this.items[this.lastPosition] = item
  }

  addFront (item: any): void {
    this.firstPosition = this.calcRightPosition(this.firstPosition - 1, this.firstPosition)
    this.items[this.firstPosition] = item
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

  toString (): string {
    return this.getItems().toString()
  }
}
