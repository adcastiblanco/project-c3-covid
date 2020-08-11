import React from 'react';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import { color } from '../../../utils/dataColors';

const RenderAreaChart = ({ data, graph1, graph2 }) => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='Date' />
        <YAxis />
        <Tooltip />
        <Area type='monotone' dataKey={graph1} stroke={color(graph1)} fill={color(graph1)} />
        <Area type='monotone' dataKey={graph2} stroke={color(graph2)} fill={color(graph2)} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RenderAreaChart;
