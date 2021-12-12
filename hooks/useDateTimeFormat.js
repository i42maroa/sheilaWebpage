
export default function useDateTimeFormat (timestamp) {
  const date = Date.now(timestamp)

  const language = 'es-Es'

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }

  return new Intl.DateTimeFormat(language, options).format(date)
}
