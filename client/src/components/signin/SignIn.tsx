import { Link } from 'react-router-dom';
import { inputProps } from '../../constants/globalConstants';
import useForm from '../../hooks/useForm/useForm';
import { signInUseFormProps, TSignInResponse } from './signInConstants';
import { ChangeEvent, FormEvent, useState } from 'react';

const SignIn = () => {
  const [error, setError] = useState<false | string>(false);

  const { isLoading, sendForm, setFormValue, isFormValid } = useForm(signInUseFormProps);

  const handleBlur = (name: string) => (e: ChangeEvent<HTMLInputElement>) => setFormValue(name, e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid()) return;
    const response = (await sendForm()) as TSignInResponse;

    if (response.error) return setError(response.error);

    // 
  };

  if (isLoading) return <p className="form__text">IS LOADING</p>;

  return (
    <section className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__title">Sign In</h1>

        {<span className="form__error"> Input fields invalid</span>}

        <div className="form__cont-main">
          <div className="form__cont-input">
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <input className="form__input" {...inputProps.name} onBlur={handleBlur(inputProps.name.name)} />
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
