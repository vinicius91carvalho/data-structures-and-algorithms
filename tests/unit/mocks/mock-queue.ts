import { DequeueItem, EnqueueItems } from '@/data-structures/queues/queue-protocols'

export class DequeueItemSpy implements DequeueItem {
  constructor (private readonly items: any[]) {}

  dequeue (): any {
    return this.items.shift()
  }
}
export class EnqueueItemsSpy implements EnqueueItems {
  items: any[] = []

  enqueue (items: any): void {
    if (items instanceof Array) {
      this.items = items
      return
    }
    this.items.push(items)
  }
}
