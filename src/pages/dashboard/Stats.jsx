import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChartsContainer from '../../components/ChartsContainer';
import StatsContainer from '../../components/StatsContainer';
import { showStats } from '../../features/allJobsSlice';
import Loading from '../../components/Loading';

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (state) => state.allJobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
