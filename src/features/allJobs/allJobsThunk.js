import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';

export const getAllJobsThunk = async (_, thunkAPI) => {
  const { search, type, status, sort, page } = thunkAPI.getState().allJobs;

  let url = `/jobs?status=${status}&jobType=${type}&sort=${sort}&page=${page}`;

  if (search) {
    url = url + `&search=${search}`;
  }

  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get('/jobs/stats');
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
