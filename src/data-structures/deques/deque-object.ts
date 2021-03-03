import { Deque } from '@/data-structures/deques/deque-protocols'

export class DequeObject implements Deque {
  private items: { [index: number]: any}
  private lastPosition: number

  constructor (items?: any[]) {
    this.items = {}
    items?.forEach((value, index) => { this.items[index] = value })
    this.lastPosition = items ? this.size() - 1 : 0
  }

  size (): number {
    return Object.keys(this.items).length
  }

  getItems (): any[] {
    return Object.values(this.items)
  }

  clear (): void {
    this.items = {}
  }

  isEmpty (): boolean {
    return Object.keys(this.items).length === 0
  }

  addFront (item: any): void {
    this.items[this.lastPosition++] = item
  }
}
