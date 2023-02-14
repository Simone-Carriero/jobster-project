import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/SearchContainerStyle';
import { clearFilters, handleChange } from '../features/allJobs/allJobsSlice';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('');
  const { status, type, sort, sortOptions } = useSelector(
    (state) => state.allJobs
  );
  const { statusOptions, jobTypeOptions } = useSelector((state) => state.job);
  const dispatch = useDispatch();

  const handleSearch = ({ target }) => {
    const name = target.name;
    const value = target.value;
    dispatch(handleChange({ name, value }));
  };

  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
      }, 1000);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch('');
    dispatch(clearFilters());
  };
  return (
    <Wrapper>
      <form className='form'>
        <h4>Search form</h4>
        <div className='form-center'>
          <FormRow
            labelText='Search'
            type='search'
            name='search'
            value={localSearch}
            id='search'
            onChange={optimizedDebounce}
          />

          <FormRowSelect
            labelText='Status'
            name='status'
            value={status}
            list={['all', ...statusOptions]}
            handleChange={handleSearch}
          />
          <FormRowSelect
            labelText='Type'
            name='type'
            value={type}
            list={['all', ...jobTypeOptions]}
            handleChange={handleSearch}
          />
          <FormRowSelect
            labelText='Sort'
            name='sort'
            value={sort}
            list={sortOptions}
            handleChange={handleSearch}
          />

          <button
            className='btn btn-block btn-danger'
            onClick={handleSubmit}>
            Clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
