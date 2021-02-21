import { PushItems } from '@/4-chapter-stacks/stacks/stack-protocols'

export class StackPushSpy implements PushItems {
  allItems: any[] = []
  callsCount: number = 0

  push (...items: any[]): void {
    this.allItems.push(...items)
    this.callsCount++
  }
}
