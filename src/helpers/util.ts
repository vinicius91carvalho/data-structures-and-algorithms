export const clone = (data: any): any => {
  return (typeof data === 'object') ? { ...data } : data
}
