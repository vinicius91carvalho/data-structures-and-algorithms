import { Stack } from '@/data-structures/stacks/stack-protocols'
import { deepCopy } from '@/helpers/util'

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
    return deepCopy(item)
  }

  peek (): any {
    const item = this.items[this.size() - 1]
    return deepCopy(item)
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

  toString (): string {
    const keys = Object.keys(this.items)

    if (this.isEmpty()) {
      return ''
    }

    let serializedStack = String(this.items[0])

    for (let i = 1; i < keys.length; i++) {
      serializedStack = `${serializedStack},${this.items[i]}`
    }
    return serializedStack
  }
}
