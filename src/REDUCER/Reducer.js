export const reducer =(state, action)=>{
if(action.type == 'LOADING'){
    return{...state, loading:true};
}
if(action.type == 'DISPLAY_COINS'){
    const {coins, stats}  = action. payload;
   
    
    return{...state, coinslist: coins, total: stats.total, total24hVolume: stats.total24hVolume,totalCoins:stats.totalCoins,totalExchanges: stats.totalExchanges,totalMarketCap: stats.totalMarketCap,totalMarkets: stats.totalMarkets, loading:false}
   
}
    if(action.type == 'DISPLAY_NEWS'){
        return{...state,newslist:action.payload.newsdata.value}
    }
    return{...state};
}