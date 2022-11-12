import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from 'recharts';

const AreaChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer
      width='100%'
      height={300}>
      <AreaChart
        data={data}
        margin={{ top: 50 }}>
        <XAxis dataKey='date' />
        <YAxis allowDecimals={false} />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='count'
          stroke='#1e3a8a'
          fill='#3b82f6'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
