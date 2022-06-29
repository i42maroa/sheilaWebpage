import * as React from 'react'

export default function NextSvg (props, color) {
  return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 98.87 103.72"
        style={{
          enableBackground: 'new 0 0 98.87 103.72'
        }}
        xmlSpace="preserve"
        {...props}
      >
        <path
          style={{
            fill: 'none',
            stroke: color,
            strokeWidth: 10,
            strokeMiterlimit: 10
          }}
          d="m34.72 11.41 39.89 40.45-39.89 40.03"
        />
      </svg>
  )
}
