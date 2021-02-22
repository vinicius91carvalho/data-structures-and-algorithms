import { Stack } from '@/data-structures/stacks/stack-protocols'
import { clone } from '@/helpers/util'

export class StackObject implements Stack {
  private items: { [key: number]: [value: any] }

  constructor (initialData?: object) {
    this.items = initialData ? { ...initialData } : {}
  }

  push (...items: any[]): void {
    items.forEach((item) => {
      this.items[this.size()] = item
    })
  }

  pop (): any {
    const lastKey = this.size() - 1
    const item = this.items[lastKey]
    delete this.items[lastKey]
    return clone(item)
  }

  peek (): any {
    const item = this.items[this.size() - 1]
    return clone(item)
  }

  isEmpty (): boolean {
    return this.size() === 0
  }

  size (): number {
    return Object.keys(this.items).length
  }

  clear (): void {
    this.items = {}
  }

  getItems (): any[] {
    const arr: any[] = []
    Object.entries(this.items).forEach(item => {
      const index = Number(item[0])
      arr[index] = item[1]
    })
    return arr
  }
}
