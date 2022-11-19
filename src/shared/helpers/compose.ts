export const compose =
  <T>(elem: T) =>
  (...args: any[]) => {
    let isArgsIncorrect = false
    args.forEach(elem => {
      if (typeof elem !== 'function') {
        isArgsIncorrect = true
      }
    })
    if (isArgsIncorrect) {
      return elem
    }

    return args.reduce((prev, curr) => curr(prev), elem)
  }
