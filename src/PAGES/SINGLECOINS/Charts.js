import React, {useEffect} from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
  } from "recharts";

const Charts = ({history}) => {

    
  return (
    <div className='charts__container'>
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
      width={500}
      height={300}
      data={history}
 
    >
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />

      <Line type="monotone" dataKey="price" stroke="blue" />
    </LineChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Charts