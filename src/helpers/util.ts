
export const deepCopy = (source: any): any => {
  return Array.isArray(source)
    ? source.map(item => deepCopy(item))
    : source instanceof Date
      ? new Date(source.getTime())
      : source && typeof source === 'object'
        ? Object.getOwnPropertyNames(source).reduce((object, prop) => {
          Object.defineProperty(object, prop, Object.getOwnPropertyDescriptor(source, prop) as PropertyDescriptor)
          object[prop] = deepCopy(source[prop])
          return object
        }, Object.create(Object.getPrototypeOf(source)))
        : source
}
