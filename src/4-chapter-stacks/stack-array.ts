export class StackArray {
  private items: any[]

  constructor (initialData?: any[]) {
    this.items = initialData ? [...initialData] : []
  }

  private clone (data: any): any {
    return (typeof data === 'object') ? { ...data } : data
  }

  push (...items: any[]): void {
    this.items.push(...items)
  }

  pop (): any {
    const item = this.items.pop()
    return this.clone(item)
  }

  peek (): any {
    const item = this.items[this.items.length - 1]
    return this.clone(item)
  }

  isEmpty (): boolean {
    return this.items.length === 0
  }

  clear (): void {
    this.items = []
  }

  getItems (): any[] {
    return [...this.items]
  }
}
