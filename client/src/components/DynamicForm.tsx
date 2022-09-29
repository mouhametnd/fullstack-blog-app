import React from 'react';
import { IForm, IFormInputProps } from '../types/types';


const Form = ({ inputs, error, handleBlur, handleSubmit }: IForm) => {
  return (
    <form onSubmit={handleSubmit}>
      {error && <span className="form__error">{error}</span>}

      <div className="grid gap-2 md:grid-cols-2">
        {inputs.map(input => (
          <input className="form__input" {...input} onBlur={handleBlur(input.name)} />
        ))}
      </div>
    </form>
  );
};

export default Form;
