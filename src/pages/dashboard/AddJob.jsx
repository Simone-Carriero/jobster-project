import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Wrapper from '../../assets/wrappers/DashboardFormPageStyle';
import FormRow from '../../components/FormRow';
import FormRowSelect from '../../components/FormRowSelect';
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from '../../features/jobSlice';

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    status,
    statusOptions,
    jobType,
    jobTypeOptions,
    isEditing,
    editJobId,
  } = useSelector((state) => state.job);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleJobInput = ({ target }) => {
    const name = target.name;
    const value = target.value;
    dispatch(handleChange({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error('Please Fill Out All Fields');
      return;
    }

    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            status,
            jobType,
          },
        })
      );
      return;
    }

    dispatch(createJob({ position, company, jobLocation, status, jobType }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }));
    }
  }, []);

  return (
    <Wrapper>
      <form
        className='form'
        onSubmit={handleSubmit}>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className='form-center'>
          <FormRow
            labelText='Position'
            type='text'
            name='position'
            value={position}
            id='position'
            onChange={handleJobInput}
          />
          <FormRow
            labelText='Company'
            type='text'
            name='company'
            value={company}
            id='Company'
            onChange={handleJobInput}
          />
          <FormRow
            labelText='Job Location'
            type='text'
            name='jobLocation'
            value={jobLocation}
            id='Job Location'
            onChange={handleJobInput}
          />

          <FormRowSelect
            labelText='Status'
            name='status'
            value={status}
            list={statusOptions}
            handleChange={handleJobInput}
          />

          <FormRowSelect
            labelText='Job Type'
            name='jobType'
            value={jobType}
            list={jobTypeOptions}
            handleChange={handleJobInput}
          />

          <div className='btn-container'>
            <button
              type='submit'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearValues())}>
              Clear
            </button>
            <button
              type='submit'
              className='btn btn-block'
              disabled={isLoading}>
              {isLoading ? 'Please wait...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
