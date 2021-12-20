const getBestManagerResult = data => {
  const name = data.reduce(
    (acc, cur) => {
      if (acc.result < cur.result) {
        acc.result = cur.result
        acc.name = cur.name
      }
      return acc
    },
    { result: 0, name: '' }
  ).name

  const result = data.reduce((acc, cur) => {
    if (cur && cur.name && cur.name.toLowerCase() === name.toLowerCase()) {
      acc += cur.result
    }
    return acc
  }, 0)

  return { name, result }
}

export default getBestManagerResult
