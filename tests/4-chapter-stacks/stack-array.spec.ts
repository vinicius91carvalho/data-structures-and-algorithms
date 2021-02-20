import { StackArray } from '@/4-chapter-stacks/stack-array'

const makeSut = (data?: []): StackArray => new StackArray(data)

describe('Stack Array', () => {
  test('Should create a new StackArray without a external data', () => {
    const sut = makeSut()
    expect(sut).toBeTruthy()
  })

  test('Should add a new element on top of the stack', () => {
    const fakeData: [] = []
    const sut = makeSut(fakeData)
    sut.push(1)
    expect(fakeData).toContain(1)
  })
})
