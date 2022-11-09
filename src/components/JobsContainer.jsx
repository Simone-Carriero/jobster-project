import React from 'react';
import { useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/JobsContainerStyle';
import Job from './Job';
import Loading from './Loading';

const JobsContainer = () => {
  const { isLoading, jobs } = useSelector((state) => state.allJobs);

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
