import { Deque } from '@/data-structures/deques/deque-protocols'

export class DequeObject implements Deque {
  private readonly items: { [index: number]: any}

  constructor (items?: any[]) {
    this.items = {}
    items?.forEach((value, index) => { this.items[index] = value })
  }

  getItems (): any[] {
    return Object.values(this.items)
  }
}
