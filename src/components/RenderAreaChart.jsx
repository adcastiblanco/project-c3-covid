import React, { PureComponent } from 'react';
import {
  ResponsiveContainer ,AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const RenderAreaChart = ({data}) => {
  return (
    <ResponsiveContainer width='100%' height={400} >
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default RenderAreaChart;
