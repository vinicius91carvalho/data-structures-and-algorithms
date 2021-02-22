import { PopItem, PushItems } from '@/4-chapter-stacks/stacks/stack-protocols'

export class StackPushSpy implements PushItems {
  allItems: any[] = []
  callsCount: number = 0

  push (...items: any[]): void {
    this.allItems.push(...items)
    this.callsCount++
  }
}

export class StackPopSpy implements PopItem {
  allItems: any[] = [0, 1, 0, 1]
  callsCount: number = 0

  pop (): any {
    this.callsCount++
    return this.allItems.pop()
  }
}
