import React from 'react';

const FormRow = ({ labelText, ...props }) => {
  return (
    <div className='form-row'>
      <label
        className='form-label'
        htmlFor={labelText.slice(0, 1).toLowerCase() + labelText.slice(1)}>
        {labelText}
      </label>
      <input
        {...props}
        className='form-input'
      />
    </div>
  );
};

export default FormRow;
