import { ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { baseInputProps, logInUseFormProps } from '../../constants';
import useAuthen from '../../hooks/useAuthen';
import useForm from '../../hooks/useForm';
import Loader from '../loader/Loader';

const LogIn = () => {
  const { authenticator } = useAuthen();
  const { isLoading, error, sendForm, setFormValue } = useForm(logInUseFormProps);
  const handleBlur = (name: string) => (e: ChangeEvent<HTMLInputElement>) => setFormValue(name, e.target.value);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { result } = await sendForm();
    if (result) {
      (e.target as HTMLFormElement).reset();
      authenticator(result);
    }
  };

  return (
    <section className="form-wrapper">
      {isLoading && <Loader />}

      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__title">Log In</h1>

        {error.msg && <span className="form__error">{error.msg}</span>}

        <div className="form__cont-main">
          <div className="form__cont-input">
            <label className="form__label" htmlFor="username">
              username
            </label>
            <input
              className="form__input"
              {...baseInputProps.username}
              onBlur={handleBlur(baseInputProps.username.name)}
            />
          </div>
          <div className="form__cont-input">
            <label className="form__label" htmlFor="password">
              Passowrd
            </label>
            <input
              className="form__input"
              {...baseInputProps.password}
              onBlur={handleBlur(baseInputProps.password.name)}
            />
          </div>

          <p className="form__text">
            Don't have an account?
            <Link to={'/sign-in'}>Sign Up</Link>
          </p>
          <button className="btn btn-submit hover">Login</button>
        </div>
      </form>
    </section>
  );
};

export default LogIn;
