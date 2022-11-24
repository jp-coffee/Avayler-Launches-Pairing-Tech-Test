export const getSuffix = (number: number): string => {
  const lastDigitTen = number % 10
  const lastDigitHundred = number % 100
  const lastDigitThousand = number % 1000

  if (
    lastDigitTen === 1 &&
    lastDigitHundred !== 11 &&
    lastDigitThousand !== 111
  ) {
    return `${number}st`
  }

  if (
    lastDigitTen === 2 &&
    lastDigitHundred !== 12 &&
    lastDigitThousand !== 112
  ) {
    return `${number}nd`
  }

  if (
    lastDigitTen === 3 &&
    lastDigitHundred !== 13 &&
    lastDigitThousand !== 113
  ) {
    return `${number}rd`
  }

  return `${number}th`
}
