import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/JobsContainerStyle';
import { getAllJobs } from '../features/allJobsSlice';
import Job from './Job';
import Loading from './Loading';

const JobsContainer = () => {
  const { isLoading, jobs } = useSelector((state) => state.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }

  if (!jobs.length) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>jobs found</h5>
      <div className='jobs'>
        {jobs.map((job) => (
          <Job
            key={job.id}
            {...job}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
