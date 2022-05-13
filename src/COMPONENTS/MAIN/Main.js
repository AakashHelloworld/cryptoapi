import React, {useState} from 'react'
import {useGlobalcontext} from "../../CONTEXT/Context"
import Maincrypto from './Maincrypto';
import Mainnews from './Mainnews';
const Main = () => {
    

    const {total,
        totalMarketCap,
        totalExchanges,
        total24hVolume,
        totalMarkets,
        totalCoins,
        coinslist,
        newslist
    } = useGlobalcontext();
    const [morecoins, setmorecoins] = useState(false);
    const [morenews, setmorenews] = useState(false);


        if(!total24hVolume && !coinslist.length && !newslist.length){
            return<h1>loading</h1>;
        }
  return (
    <div className='Main__container'>
       <h1 className='Main__container__primary'>Global Crypto Stats</h1>
       <div className='globalcrypto'>
        <div>
           <h4>Total Cryptocurrencies</h4>
           <h3>{total}</h3>
        </div>
        <div>
           <h4>Total Exchange</h4>
           <h3>{totalExchanges}</h3>
        </div>
        <div>
           <h4>Total Market Cap</h4>
           <h3>{totalMarketCap}</h3>
        </div>
        <div>
           <h4>Total 24h Volume</h4>
           <h3>{total24hVolume}</h3>
        </div>
        <div>
           <h4>Total Market</h4>
           <h3>{totalMarkets}</h3>
        </div>
        <div>
           <h4>Total Coins</h4>
           <h3>{totalCoins}</h3>
        </div>
       </div>
       <div className='toptencry'>
       <h1 className='maincrypto__container__primary'>Top 10 Cryptocurrencies in the world</h1>
       <h3 className='maincrypto__container__secondary' onClick={()=> setmorecoins(!morecoins)}> {!morecoins? "SHOW MORE": "SHOW LESS"}</h3>
       </div>
       <Maincrypto coinslist={coinslist} morecoins={morecoins}/>
       <h3 className='mobile_showmore' onClick={()=> setmorecoins(!morecoins)}> {!morecoins? "SHOW MORE": "SHOW LESS"}</h3>
       <div className='toptencry'>
       <h1 className='maincrypto__container__primary'>Latest Crypto News</h1>
       <h3 className='maincrypto__container__secondary' onClick={()=> setmorenews(!morenews)} > {!morenews? "SHOW MORE": "SHOW LESS"}</h3>
       </div>
       <Mainnews newslist={newslist} morenews={morenews}/>
       <h3 className='mobile_showmore' onClick={()=> setmorenews(!morenews)} > {!morenews? "SHOW MORE": "SHOW LESS"}</h3>
    </div>
  )
}

export default Main