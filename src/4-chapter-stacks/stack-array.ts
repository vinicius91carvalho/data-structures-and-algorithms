export class StackArray {
  constructor (private readonly data: any[]) {}

  push (...items: any[]): void {
    this.data.push(...items)
  }

  pop (): any {
    return this.data.pop()
  }

  peek (): any {
    return this.data[this.data.length - 1]
  }
}
