import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/ChartsContainerStyle';
import AreaChartComponent from './AreaChartComponent';
import BarChartComponent from './BarChartComponent';

const ChartsContainer = () => {
  const { monthlyApplications: data } = useSelector((state) => state.allJobs);
  const [areaChart, setAreaChart] = useState(true);
  return (
    <Wrapper>
      <h4>Monthly applications</h4>
      <button
        type='button'
        onClick={() => setAreaChart(!areaChart)}>
        {areaChart ? 'Bar chart' : 'Area chart'}
      </button>
      {areaChart ? (
        <AreaChartComponent data={data} />
      ) : (
        <BarChartComponent data={data} />
      )}
    </Wrapper>
  );
};

export default ChartsContainer;
