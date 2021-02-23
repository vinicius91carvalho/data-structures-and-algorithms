import { Queue } from '@/data-structures/queue/queue-protocols'

export class QueueArray implements Queue {
  items: any[] = []

  enqueue (...items: any): void {
    this.items.push(...items)
  }

  getItems (): any[] {
    return this.items
  }
}
