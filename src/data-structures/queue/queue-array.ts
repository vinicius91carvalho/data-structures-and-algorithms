import { Queue } from '@/data-structures/queue/queue-protocols'

export class QueueArray implements Queue {
  items: any[]

  constructor (initialData?: any[]) {
    this.items = initialData ? [...initialData] : []
  }

  enqueue (...items: any): void {
    this.items.push(...items)
  }

  getItems (): any[] {
    return this.items
  }

  dequeue (): any {
    return this.items.shift()
  }
}
