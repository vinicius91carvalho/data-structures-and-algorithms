import { SizeItems } from '@/data-structures/common/collection-protocols'
import { DequeueItem, EnqueueItems } from '@/data-structures/queues/queue-protocols'

export class QueueSizeItemsFake implements SizeItems {
  constructor (private readonly items: any[]) {}

  size (): number {
    return this.items.length
  }
}
export class DequeueItemFake implements DequeueItem {
  constructor (private readonly items: any[]) {}

  dequeue (): any {
    return this.items.shift()
  }
}
export class EnqueueItemsFake implements EnqueueItems {
  items: any[] = []

  enqueue (items: any): void {
    if (items instanceof Array) {
      this.items = items
      return
    }
    this.items.push(items)
  }
}
