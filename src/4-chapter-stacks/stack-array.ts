export class StackArray {
  constructor (private readonly data: any[]) {
    if (!data) {
      throw new Error('The data cannot be falsy')
    }
  }

  push (...items: any[]): void {
    this.data.push(...items)
  }

  pop (): any {
    return this.data.pop()
  }

  peek (): any {
    return this.data[this.data.length - 1]
  }

  isEmpty (): boolean {
    return this.data.length === 0
  }
}
