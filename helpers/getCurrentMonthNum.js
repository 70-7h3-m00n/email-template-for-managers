const getCurrentMonthNum = month => {
  const ruMonths = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ]

  let output
  ruMonths.forEach(
    (item, idx) =>
      item &&
      month &&
      item.toLowerCase() === month.toLowerCase() &&
      (output = idx)
  )

  return output
}

export default getCurrentMonthNum
