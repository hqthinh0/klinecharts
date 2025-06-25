import React, { createContext, useState , useReducer , useEffect } from 'react'
import ReducerContext, { initState } from '../store/reducer/ReducerContext';


const ApiContext = createContext();
const ApiContextTwo = createContext();
const ApiContextOne = createContext();
const ApiContextThree = createContext();
const ApiDarkMore = createContext();



const ContextProviderDarkMore = ({ children }) => {

  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const root = document.body;
    if (theme) {
      root.classList.add('dark');``
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }

  }, [theme]);

  return (
    <ApiDarkMore.Provider value={[theme, setTheme]}>
           {children}
    </ApiDarkMore.Provider>
  )
}

export default ContextProviderDarkMore


const ContextProvider = ({children }) => {
    const [text] = useState(['1m', '5m', "15m","1h", "2h", "4h"]);
    const [day] = useState(["D","W","M","Y"]);
    const [symbols, setSymbol] = useState([]);
    

  
    
   useEffect(() => {
    fetch('https://api.binance.com/api/v3/exchangeInfo')
      .then(response => response.json())
      .then(data => {
         const allSymbols = data.symbols.map(item => item.symbol); // phải là .symbols
        setSymbol(allSymbols);
      })
      .catch(error => console.error('Error fetching symbols:', error));
  }, []);
  return (
   <ApiContext.Provider value={{text, day, symbols}}>
    {children}
   </ApiContext.Provider>
  )
};



const ContextProviderTwo = ({children}) => {
    //  const [textTwo] = useState('Notication Provider Two');

     const [state, dispatch] = useReducer(ReducerContext, initState);
  return (
   <ApiContextTwo.Provider value={[state, dispatch]}>
        {children}
   </ApiContextTwo.Provider>
  )
};


const ContextProviderOne = ({ children }) => {
     const [textOne] = useState("text3");
  return (
   <ApiContextOne.Provider value={{textOne}}>
    {children}
   </ApiContextOne.Provider>
  )
};

const ContextProviderThree = ({children}) => {
    const [textThree] = useState("ContextProviderThree");
  return (
    <ApiContextThree.Provider value={{textThree}}>
        {children}
    </ApiContextThree.Provider>
  )
};





export { ApiContext, ApiContextTwo, ApiContextOne, ApiContextThree, ApiDarkMore , ContextProvider, ContextProviderTwo, ContextProviderOne, ContextProviderThree, ContextProviderDarkMore };

