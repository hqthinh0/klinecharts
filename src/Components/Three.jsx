import React, { useRef, useEffect } from 'react'
import { init, dispose } from 'klinecharts'
//import {  ApiContextThree } from '../Context/ContextProvider'

const Three = () => {
const chartRef = useRef(null)
  const chart = useRef(null)

  useEffect(() => {
    chart.current = init(chartRef.current)
    chart.current.applyNewData([
      { timestamp: 1680000000000, open: 20, high: 30, low: 10, close: 25, volume: 100 },
      { timestamp: 1680001000000, open: 25, high: 35, low: 15, close: 30, volume: 120 },
      { timestamp: 1680002000000, open: 30, high: 40, low: 20, close: 35, volume: 150 },
      { timestamp: 1680003000000, open: 35, high: 45, low: 25, close: 40, volume: 170 },
    ])

    return () => dispose(chart.current)
  }, [])

  const handleDrawTool = (type) => {
    chart.current?.createDrawingTool(type)
  }

  const handleClearDrawings = () => {
    chart.current?.removeAllDrawingTool()
  }

  return (
    <div>
      <div className="flex gap-2 my-4">
        <button onClick={() => handleDrawTool('line')} className="btn btn-sm btn-outline">Vẽ Trend Line</button>
        <button onClick={() => handleDrawTool('fibonacciLine')} className="btn btn-sm btn-outline">Vẽ Fibonacci</button>
        <button onClick={() => handleDrawTool('rect')} className="btn btn-sm btn-outline">Vẽ Rectangle</button>
        <button onClick={handleClearDrawings} className="btn btn-sm btn-error text-white">Xóa tất cả</button>
      </div>

      <div ref={chartRef} style={{ width: '100%', height: '500px' }} />
    </div>
  )
}

export default Three
