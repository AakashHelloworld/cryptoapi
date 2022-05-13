import React from 'react';
import {Link} from 'react-router-dom'
const Maincrypto = ({coinslist, morecoins}) => {
  
  return (
    <div className='maincrypto__container'>
   
      {
        coinslist.length &&
          coinslist.map((data)=>{
              if(!morecoins){
            if(data.rank <=10){
            return(
              <Link to={`coins/${data.uuid}`} className='cardcoinsblack'  key={data.uuid}>
              <div className='cardcoins'>
              <div className='cardcoins__primary'>
              <div>
                <h3>{data.rank}.</h3>
                <h3>{data.symbol}</h3>
              </div>
                <img src={data.iconUrl}/>
                </div>
                <div className='cardcoins__secondary'>
                  <p>PRICE: {Math.floor(data.price)}</p>
                  <p>MARKET CAP: {data.marketCap}</p>
                  <p>CHANGE: {data.change}</p>
                </div>
              </div>
              </Link>
            )
      }}
      else{
        return(
              <Link to={`coins/${data.uuid}`} className='cardcoinsblack'  key={data.uuid}>
              <div className='cardcoins'>
              <div className='cardcoins__primary'>
              <div>
                <h3>{data.rank}.</h3>
                <h3>{data.symbol}</h3>
              </div>
                <img src={data.iconUrl}/>
                </div>
                <div className='cardcoins__secondary'>
                  <p>PRICE: {Math.floor(data.price)}</p>
                  <p>MARKET CAP: {data.marketCap}</p>
                  <p>CHANGE: {data.change}</p>
                </div>
              </div>
              </Link>
            )
        

      }
      })

      }
    </div>
  )
}

export default Maincrypto