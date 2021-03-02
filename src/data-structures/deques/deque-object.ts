import { Deque } from '@/data-structures/deques/deque-protocols'

export class DequeObject implements Deque {
  private items: { [index: number]: any}

  constructor (items?: any[]) {
    this.items = {}
    items?.forEach((value, index) => { this.items[index] = value })
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
}
