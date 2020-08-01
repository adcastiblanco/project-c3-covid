import React, { PureComponent } from 'react';
import {
  ResponsiveContainer ,AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const RenderAreaChart = ({data}) => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="value" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="pv" stackId="1" stroke="#8884d8" fill="#82ca9d" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default RenderAreaChart;
