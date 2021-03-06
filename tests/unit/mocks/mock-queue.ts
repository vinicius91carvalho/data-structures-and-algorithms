import { SizeItems } from '@/data-structures/common/collection-protocols'
import { DequeueItem, EnqueueItems } from '@/data-structures/queues/queue-protocols'

export class QueueSizeItemsSpy implements SizeItems {
  constructor (readonly allItems: any[]) {}
  callsCount: number = 0

  size (): number {
    this.callsCount++
    return this.allItems.length
  }
}
export class DequeueItemSpy implements DequeueItem {
  constructor (readonly allItems: any[]) {}
  callsCount: number = 0
  results: any[] = []

  dequeue (): any {
    this.callsCount++
    const item = this.allItems.shift()
    this.results.push(item)
    return item
  }
}
export class EnqueueItemsSpy implements EnqueueItems {
  constructor (readonly allItems: any[]) {}
  callsCount: number = 0
  params: any[] = []

  enqueue (...items: any): void {
    this.callsCount++
    this.params.push(items)
    this.allItems.push(...items)
  }
}
