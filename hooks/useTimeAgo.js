import { useEffect, useState } from 'react'

const DATE_UNITS = [
  ['month', 2592000],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1]
]

const getDateDiffs = (timestamp) => {
  const now = Date.now() / 1000
  const elapsed = timestamp - now

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
      const value = Math.round(elapsed / secondsInUnit)
      console.log('value ' + value + ', unit ' + unit)
      return { value, unit }
    }
  }
}

export default function useTimeAgo (timestamp) {
  const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp))

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp)
      setTimeago(newTimeAgo)
    }, 6000000) // Refrescar cada 10 min

    return () => clearInterval(interval)
  }, [timestamp])

  const rtf = new Intl.RelativeTimeFormat('es', { style: 'long' })

  const { value, unit } = timeago

  return rtf.format(value, unit)
}
