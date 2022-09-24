import React from 'react';
import inputProps from '../../consants/inputProps';

const LogIn = () => {
  return (
    <section className="form-wrapper">
      <form className="form">
        <h1 className="form__title">Log In</h1>

        <span className="form__error">some error </span>

        <div className="form__cont-main">
       
          <div className="form__cont-input">
            <label className="form__label" htmlFor="username">
              username
            </label>
            <input className="form__input" {...inputProps.username} />
          </div>
          <div className="form__cont-input">
            <label className="form__label" htmlFor="password">
              Passowrd
            </label>
            <input className="form__input" {...inputProps.password} />
          </div>
          <button className='form__button hover'>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default LogIn;
