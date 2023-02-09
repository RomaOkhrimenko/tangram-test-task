export const cutString = (str, maxWord) => {
  const newStr = str.split('')

  if (newStr.length > maxWord + 1) {
    newStr.splice(maxWord)
    newStr[maxWord] = '...'
  }

  return newStr.join('')
}
