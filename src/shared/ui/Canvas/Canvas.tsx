import { useEffect, useRef } from 'react'

import css from './Canvas.module.css'

type CanvasProps = {
  data: {
    xLabels: (number | string)[]
    yLabels: (number | string)[]
  }
  styles: {
    backgroundColor?: string
  }
}

export function Canvas({ styles: { backgroundColor } }: CanvasProps) {
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
      //background
      ctx.fillStyle = backgroundColor || '#1B2028'
      ctx.fillRect(0, 0, width, height)
      //x labels
    }
  }, [])

  return <canvas className={css.canvas} ref={ref} />
}
