import React from 'react'
import { mockComponent } from 'react-dom/test-utils'
import moment from 'moment'

const Mainnews = ({newslist, morenews}) => {
  return (
    <div className='mainnews__container'>
    {
        newslist.map((data, index)=>{
          if(!morenews){
          if(index <= 5){
            return(
                <a href={data.url} key={index} className='newscardblack' target="_blank" >
                <div className='newscard' >
                <div className='newscard__primary'>
                <p>{moment(data.datePublished).startOf('ss').fromNow()}</p> 
                 <img src={data.image.thumbnail.contentUrl} />
                </div>
                <div className='newscard__details'>
                    <p>{data.name}</p>
                    <p>{data.description}</p>
                </div>  
                </div>
                </a>
            )}}
            else{
              return(
                <a href={data.url} key={index} className='newscardblack' target="_blank" >
                <div className='newscard' >
                <div className='newscard__primary'>
                <p>{moment(data.datePublished).startOf('ss').fromNow()}</p> 
                 <img src={data.image.thumbnail.contentUrl} />
                </div>          
                <div className='newscard__details'>
                    <p>{data.name}</p>
                    <p>{data.description}</p>
                </div>                
                </div>
                </a>

              )
            }
        })
    }

    </div>
  )
}

export default Mainnews