import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import Charts from './Charts';

const Singlecoin = () => {
    const [data, setData] = useState([]);
    const [changetime, setchangetime]= useState('24h')
    const [history, setHistory] = useState([]);
    const {id} = useParams();
    const time = ['3h', '24h', '7d']

    const fectingdata =async()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
                'X-RapidAPI-Key': 'ff3676a897mshbf6503e32044614p16e61cjsnc974fcb11141'
            }
        };
        
       const response =  await fetch(`https://coinranking1.p.rapidapi.com/coin/${id}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${changetime}`, options)
        const {data} = await response.json();
        setData(data.coin)
       
    }
    const fetchinghistory =async()=>{
        console.log(changetime)
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
                'X-RapidAPI-Key': 'ff3676a897mshbf6503e32044614p16e61cjsnc974fcb11141'
            }
        };
        const response =  await fetch(`https://coinranking1.p.rapidapi.com/coin/${id}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${changetime}`, options)
        const responsedata = await response.json();
        console.log(responsedata.data.history);
        let newhistory = [];
    for(let i=0; i<responsedata.data.history.length ; i++){
        newhistory.push({ price: Math.floor(responsedata.data.history[i].price), time: new Date(responsedata.data.history[i].timestamp *1000).toLocaleDateString()})

    }
    console.log(newhistory);
    setHistory(newhistory)

    }


    useEffect(()=>{
        fectingdata();
    },[])
    useEffect(()=>{
        fetchinghistory();
    },[changetime])
    if(!data.rank && !history.length){
        return <h1>loading</h1>
    }

  return (
    
      
    <div className='singlepage__container'>
    
    <h1 className='singlepage__primary'>{data?.name}</h1>
    <div className='primary__container'>
    <div className='left'>
<h1 className='left__primary'>USD value statistics</h1>
<div className='left__content'>
    <p className='left__secondary'><span>Price:</span>{Math.floor(data?.price)}</p>
    <p className='left__secondary'><span>Rank:</span>{data?.rank}</p>
    <p className='left__secondary'><span>Market cap:</span> {data?.marketCap}</p>
    {/* <p>Daily-avg:{data?.allTimeHigh.price}</p> */}
</div>

    </div>
    <div className='right'>
    <h1 className='left__primary'>Other statistics info</h1>
    <div>
    <p className='left__secondary'><span>Number of Market:</span>{data?.numberOfMarkets}</p>
    <p className='left__secondary'><span>Number of Exchange:</span>{data?.numberOfExchanges}</p>
    <p className='left__secondary'><span>Aprroved Supply: </span>{data?.supply.confirmed ? "Yes": "NO"}</p>
    <p className='left__secondary'><span>Total Supply:</span> {data?.supply.total}</p>
    <p className='left__secondary'><span>Circulating Supply:</span>{data?.supply.confirmed}</p>
</div>
    </div>
</div>

<div className='berif_content' dangerouslySetInnerHTML={{__html: data.description}} ></div>
<div className='select__container'>
        <select className='select__tag' defaultValue={'24h'} onChange={(e)=> setchangetime(e.target.value)}>
            {
                time.map((data)=>{
                    return(
                        <option key={data}>{data}</option>
                    )
                })
            }
        </select>
        <h3 className='change__coin__primary'><span>Change:</span>{data?.change}</h3>
        </div>
       <Charts history={history} setHistory={setHistory} fetchinghistory={fetchinghistory}/>
    

        </div>
      
    
    
    
  )
}

export default Singlecoin