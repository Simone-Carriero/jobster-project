import React from 'react';
import { FaLocationArrow, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/JobStyle';
import JobInfo from './JobInfo';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteJob } from '../features/jobSlice';

const Job = ({
  _id,
  company,
  createdAt,
  jobLocation,
  jobType,
  position,
  status,
}) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format('MMM Do, YY');
  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{company.charAt(0)}</div>
        <div className='info'>
          <h5>{jobType}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <JobInfo
            icon={<FaLocationArrow />}
            text={jobLocation}
          />
          <JobInfo
            icon={<FaCalendarAlt />}
            text={date}
          />
          <JobInfo
            icon={<FaBriefcase />}
            text={position}
          />

          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className='actions'>
            <Link
              to=''
              className='btn edit-btn'>
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
              onClick={() => {
                dispatch(deleteJob(_id));
              }}>
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
