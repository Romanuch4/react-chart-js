import { useMemo } from 'react'
import { Canvas } from 'shared/ui/Canvas/Canvas'

const TestPage = () => {
  const canvasStyles = useMemo(() => {
    return {
      boxShadow: '4px 4px 33px rgba(0, 0, 0, 0.05)',
      borderRadius: 15,
      backgroundColor: '#1B2028',
      padding: 28,
    }
  }, [])

  const xLabelStyles = useMemo(
    () => ({
      fontFamily: 'Poppins, sans-serif',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 12,
      color: '#9E9E9E',
    }),
    [],
  )

  const contentStyles = useMemo(
    () => ({
      backgroundColor: 'red',
    }),
    [],
  )

  const data = useMemo(
    () => ({
      xLabels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      yLabels: [0, 10, 20, 30, 40, 50, 60],
      coordinates: [
        [0, 0],
        [1, 10],
        [2, 20],
        [3, 30],
        [4, 40],
        [5, 50],
      ] as [number, number][],
    }),
    [],
  )
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <div style={{ width: 560, height: 320 }}>
        <Canvas
          canvasStyles={canvasStyles}
          contentStyles={contentStyles}
          xLabelStyles={xLabelStyles}
          yLabelStyles={xLabelStyles}
          data={data}
        />
      </div>
    </div>
  )
}

export default TestPage
