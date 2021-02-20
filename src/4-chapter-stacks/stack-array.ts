import { Stack } from '@/4-chapter-stacks/stack-protocols'
import { clone } from '@/helpers/util'

export class StackArray implements Stack {
  private items: any[]

  constructor (initialData?: any[]) {
    this.items = initialData ? [...initialData] : []
  }

  push (...items: any[]): void {
    this.items.push(...items)
  }

  pop (): any {
    const item = this.items.pop()
    return clone(item)
  }

  peek (): any {
    const item = this.items[this.items.length - 1]
    return clone(item)
  }

  isEmpty (): boolean {
    return this.items.length === 0
  }

  size (): number {
    return this.items.length
  }

  clear (): void {
    this.items = []
  }

  getItems (): any[] {
    return [...this.items]
  }
}
