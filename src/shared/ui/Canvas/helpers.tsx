export const getZero = (count: number) => {
  let res = ''
  for (let i = 0; i < count - 1; i++) {
    res += '0'
  }
  return res
}
