import { Link } from 'react-router-dom';
import { inputProps } from '../../constants/globalConstants';
import useForm from '../../hooks/useForm/useForm';
import { signInUseFormProps } from './signInConstants';
import { ChangeEvent, FormEvent } from 'react';
import Loader from '../loader/Loader';
import { useAuthen } from '../../hooks/useAuthen';
import { TLoginSigninResponse } from '../../types/types';

const SignIn = () => {
  const { authenticator } = useAuthen();
  const { isLoading, error, sendForm, setFormValue } = useForm(signInUseFormProps);

  const handleBlur = (name: string) => (e: ChangeEvent<HTMLInputElement>) => setFormValue(name, e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = (await sendForm()) as TLoginSigninResponse;
    if (response?.userToken) {
      authenticator(response);
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <section className="form-wrapper">
      {isLoading && <Loader />}

      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__title">Sign In</h1>

        {error.msg && <span className="form__error">{error.msg}</span>}

        <div className="form__cont-main">
          <div className="form__cont-input">
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <input className="form__input" {...inputProps.name} onBlur={handleBlur(inputProps.name.name)}  />
          </div>
          <div className="form__cont-input">
            <label className="form__label" htmlFor="username">
              username
            </label>
            <input className="form__input" {...inputProps.username} onBlur={handleBlur(inputProps.username.name)} />
          </div>
          <div className="form__cont-input">
            <label className="form__label" htmlFor="password">
              Passowrd
            </label>
            <input className="form__input" {...inputProps.password} onBlur={handleBlur(inputProps.password.name)} />
          </div>

          <p className="form__text">
            Have an account?
            <Link to={'/log-in'}>Log in now</Link>
          </p>

          <button className="form__submit hover">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
