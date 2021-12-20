const isCurrentMonth = month => {
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

  const currentMonth = new Date().getMonth()

  if (
    month &&
    ruMonths &&
    ruMonths[currentMonth] &&
    month.toLowerCase() === ruMonths[currentMonth].toLowerCase()
  )
    return true
  if (
    month &&
    ruMonths &&
    ruMonths[currentMonth] &&
    month.toLowerCase() !== ruMonths[currentMonth].toLowerCase()
  )
    return false
}

export default isCurrentMonth
