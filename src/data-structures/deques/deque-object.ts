import { GetItems } from '@/data-structures/common/collection-protocols'

export class DequeObject implements GetItems {
  private readonly items: { [index: number]: any}

  constructor (items?: any[]) {
    this.items = {}
    items?.forEach((value, index) => { this.items[index] = value })
  }

  getItems (): any[] {
    return Object.values(this.items)
  }
}
