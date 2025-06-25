import { init, dispose } from 'klinecharts';
import React, { useState, useContext, useEffect, useRef } from 'react';
import { ApiContext } from '../Context/ContextProvider';


const Chartjs = () => {

  //const [loading, setLoading] = useState(true);

  const data = useContext(ApiContext);
  
  const [dateFormat, setDateFormat] = useState('');
  
  const [itemClick, setItemClick] = useState("1m");
  const [symbol, setSymbols] = useState('BTCUSDT');
  const [search, setSearch] = useState('');
  const [candles, setCandles] = useState([]);

  const forcus = useRef(0);
  

  const chartRef = useRef(null);
  const chart = useRef(null);

  const handleClick = (item) => {
    setItemClick(item);
  }
    const handleClickDayOne = (item) =>{
    setDateFormat(item);
  }

  useEffect(() => {
   
  chart.current = init(chartRef.current); 
  chart.current.setStyles({
      candle: {
        bar: {
          upColor: '#8fd3e8',
          upBorderColor: '#8fd3e8',
          upWickColor: '#8fd3e8',
          downColor: '#edafda',
          downBorderColor: '#edafda',
          downWickColor: '#edafda'
        }
      }
    })
    fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${itemClick}&limit=1000`)
    .then(res => res.json())
    .then(dataList => {
      const transformedData = dataList.map(item => ({
        timestamp: item[0],
        dateFormatted: item[0],
        open: parseFloat(item[1]),
        high: parseFloat(item[2]),
        low: parseFloat(item[3]),
        close: parseFloat(item[4]),
        volume: parseFloat(item[5])
      }));
      setCandles(transformedData);
      chart.current.applyNewData(transformedData);

      chart.current.createIndicator('MA', false, {
        id: 'candle_pane',
        calcParams: [5, 10, 20],
        styles: {
          ma5: { color: '#e91e63' },
          ma10: { color: '#2196f3' },
          ma20: { color: '#ff9800' }
        }
      });
    })
    .catch(error => {
      console.error('Lỗi khi tải dữ liệu KLine:', error);
    });

  return () => {
    if (chart.current) {
      dispose(chart.current);
    }
  };
}, [itemClick, symbol]);

const handleSymbols = (itemsymbol) =>{
  setSymbols(itemsymbol);
}
  return (
    <>
    <div className='flex gap-5'>
      {data.text.map((item, index) =>{
          
          return(  <p key={index}  onClick={() => handleClick(item)} className={`item border px-3 py-1 cursor-pointer rounded ${
        itemClick === item ? 'bg-blue-500 text-white font-bold' : 'hover:bg-gray-100'
      }`}  >{item} </p>)
      })}
       {data.day.map((item, index) =>{
          
          return(  <p key={index}  onClick={() => handleClickDayOne(item)} className={`item border px-3 py-1 cursor-pointer rounded ${
        dateFormat === item ? 'bg-blue-500 text-white font-bold' : 'hover:bg-gray-100'
      }`}  >  {item} </p>)
      })}
    </div>
    <label htmlFor="my_modal_7" className="btn">open modal</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle"   onClick={() => setTimeout(() => forcus.current?.focus(), 100)} />
      <div className=" modal " role="dialog">
     
        <div className="modal-box pt-0 h-96  relative">
          <div className='sticky w-full pt-3 top-0 z-10 bg-white'>
            <h3 className="text-xl font-bold mb-3 ">Chọn Symbol</h3>
            <input  type="text"  value={search} ref={forcus} onChange={(e) => setSearch(e.target.value)} placeholder="Tìm symbol..."  className="border p-2 w-full mb-2" />
          </div>
          <div className='body overflow-hidden overflow-y-auto'></div>
          {data.symbols.filter(sym => sym.includes(search.toUpperCase())).map((sym, index) => (<h3 key={index} className='cursor-pointer' onClick={() => handleSymbols(sym)}>{sym}</h3>))};
          </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>

      <div style={{ position: 'relative' }}>
        <div ref={chartRef} style={{ width: '100%', height: '500px' }} />
      </div>
      <div className="mt-6"> 
          <h2 className="text-lg font-bold mb-2">Chi tiết dữ liệu</h2>
          <div className="overflow-x-auto max-h-120 overflow-y-auto">
            <table className="table w-full text-sm">
              <thead>
                <tr className="bg-gray-100 sticky top-0">
                  <th>Thời gian</th>
                  <th>Open</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>Close</th>
                  <th>up</th>
                  <th>Volume</th>
                </tr>
              </thead>
              <tbody>
                {candles.reverse().map((candle, index) => (
                  <tr key={index} className="hover:bg-blue-100 transition-colors cursor-pointer">
                    <td>{new Date(candle.timestamp).toLocaleString()}</td>
                    <td>{candle.open}</td>
                    <td>{candle.high}</td>
                    <td>{candle.low}</td>
                    <td>{candle.close}</td>
                    <td>{parseFloat(candle.high - candle.low)}</td>
                    <td>{candle.volume}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
       </div>
    </>
  );
};

export default Chartjs;