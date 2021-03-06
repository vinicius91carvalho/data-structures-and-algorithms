import { EnqueueItems } from '@/data-structures/queues/queue-protocols'

export class EnqueueItemsSpy implements EnqueueItems {
  items: any[] = []
  callsCount: number = 0

  enqueue (...item: any): void {
    this.items.push(...item)
    this.callsCount++
  }
}
