import { useMemo } from 'react'
import { Canvas } from 'shared/ui/Canvas/Canvas'

const TestPage = () => {
  const styles = useMemo(
    () => ({
      backgroundColor: '#1B2028',
    }),
    [],
  )

  const data = useMemo(
    () => ({
      xLabels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      yLabels: [0, 10, 20, 30, 40, 50],
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
        <Canvas styles={styles} data={data} />
      </div>
    </div>
  )
}

export default TestPage
