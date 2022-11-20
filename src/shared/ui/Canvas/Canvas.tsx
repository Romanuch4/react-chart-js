import { useEffect, useRef } from 'react'

import { getZero } from './helpers'

type CanvasProps = {
  canvasStyles?: React.CSSProperties
  data: {
    xLabels: (number | string)[]
    yLabels: (number | string)[]
    coordinates: [number, number][]
  }
  contentStyles: React.CSSProperties
  xLabelStyles?: React.CSSProperties
  yLabelStyles?: React.CSSProperties
}

export function Canvas({
  contentStyles,
  canvasStyles,
  xLabelStyles,
  yLabelStyles,
  data: { xLabels, yLabels, coordinates },
}: CanvasProps) {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (ctx) {
      const width = ctx.canvas.width
      const height = ctx.canvas.height
      // change the start of coordinate system to left bottom
      ctx.scale(-1, 1)
      ctx.translate(0, height - 1)
      ctx.rotate(Math.PI)
      // background
      ctx.fillStyle = contentStyles?.backgroundColor || '#1B2028'
      ctx.fillRect(0, 0, width, height)
      // chart
      ctx.fillStyle = 'black'
      ctx.beginPath()
      //коефіцієнт для масштабу
      const xData = coordinates
        .reduce((prev: number[], curr) => [...prev, curr[0]], [])
        .sort((a, b) => a - b)
      const yData = coordinates
        .reduce((prev: number[], curr) => [...prev, curr[1]], [])
        .sort((a, b) => a - b)
      const xk = xData[xData.length - 1].toString(10).length
      const yk = yData[yData.length - 1].toString(10).length

      const totalCoordinates = coordinates.map(coords => {
        return [
          coords[0] / parseInt(`1${getZero(xk)}`, 10),
          coords[1] / parseInt(`1${getZero(yk)}`, 10),
        ]
      })

      const xItemWidth = width / (xLabels.length - 1)
      const yItemWidth = height / (yLabels.length - 1)

      totalCoordinates.forEach((_, i, arr) => {
        if (i !== arr.length - 1) {
          ctx.moveTo(arr[i][0] * xItemWidth, arr[i][1] * yItemWidth)
          ctx.lineTo(arr[i + 1][0] * xItemWidth, arr[i + 1][1] * yItemWidth)
        }
      })
      ctx.stroke()
      ctx.closePath()
    }
  }, [])

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        ...canvasStyles,
      }}
    >
      <div style={{ display: 'flex', height: '90%', marginBottom: 20 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'center',
            marginRight: 20,
            ...yLabelStyles,
          }}
        >
          {yLabels.reverse().map(label => {
            return <div key={label}>{label}</div>
          })}
        </div>
        <canvas ref={ref} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: 35,
          ...xLabelStyles,
        }}
      >
        {xLabels.map(label => {
          return <div key={label}>{label}</div>
        })}
      </div>
    </div>
  )
}
