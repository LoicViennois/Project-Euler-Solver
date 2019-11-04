export function euler019 (): number {
  const date = new Date('1901-01-01')
  const lastDate = new Date('2000-12-31')
  let nbSundays = 0

  const toISOstring = (d: Date): string => {
    const year = d.getFullYear()
    const month = d.getMonth() + 1
    const day = d.getDate()
    return `${year}-${month}-${day}`
  }

  const addOneDay = (d: Date) => {
    d.setDate(d.getDate() + 1)
  }

  while (toISOstring(date) !== toISOstring(lastDate)) {
    addOneDay(date)
    if (date.getDay() === 0 && date.getDate() === 1) {
      nbSundays += 1
    }
  }

  return nbSundays
}
