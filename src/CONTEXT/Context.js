import React, {useContext, useEffect, useReducer} from 'react';
import axios from "axios";
import {reducer} from "../REDUCER/Reducer"
const Appcontext = React.createContext();
export const AppProvider = ({children}) => {
  const initialstate ={
    total:0,
    totalMarketCap:0,
    totalExchanges:0,
    total24hVolume:0,
    totalMarkets:0,
    totalCoins:0,
    coinslist:[],
    newslist:[],
    loading:false,
  }
  const [state, dispatch] = useReducer(reducer, initialstate)   
  
  
  const fetchingcoins =async()=>{
    dispatch({type:'LOADING'});
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
        'X-RapidAPI-Key': 'ff3676a897mshbf6503e32044614p16e61cjsnc974fcb11141'
      }
    };
    const coinsresponse = await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options);

    const {data } = await coinsresponse.json();
    dispatch({type:'DISPLAY_COINS', payload:{...data}})
  }
  const fetchingnews = async()=>{
    dispatch({type:'LOADING'});
    const options = {
      method: 'GET',
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        'X-RapidAPI-Key': 'ff3676a897mshbf6503e32044614p16e61cjsnc974fcb11141'
      }
    };
    const responsenews = await fetch('https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw', options);
    const newsdata = await responsenews.json();
    dispatch({type:'DISPLAY_NEWS', payload:{newsdata}})
  }

  useEffect(()=>{
    fetchingcoins();
    fetchingnews();
  },[])

  return (
      <Appcontext.Provider
            value={{
               ...state
            }}
        >
          {children}
      </Appcontext.Provider>
    
  )
}
export const useGlobalcontext =()=>{
    return useContext(Appcontext)
}

