export class StackArray {
  constructor (private readonly data: any[]) {}

  push (...items: any[]): void {
    this.data.push(...items)
  }

  pop (): void {
    this.data.pop()
  }
}
