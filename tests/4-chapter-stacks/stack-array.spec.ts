import { StackArray } from '@/4-chapter-stacks/stack-array'

const makeSut = (data: []): StackArray => new StackArray(data)

describe('Stack Array', () => {
  test('Should add a new element on top of the stack', () => {
    const data: [] = []
    const sut = makeSut(data)
    sut.push(1)
    expect(data).toContain(1)
  })
})
