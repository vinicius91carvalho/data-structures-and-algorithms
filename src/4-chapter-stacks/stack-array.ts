export class StackArray {
  constructor (private readonly data: any[] = []) {}

  push (item: any): void {
    this.data.push(item)
  }
}
