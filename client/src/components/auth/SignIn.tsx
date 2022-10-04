import { Link } from 'react-router-dom';
import { baseInputProps, signInUseFormProps } from '../../constants';
import useForm from '../../hooks/useForm';
import { ChangeEvent, FormEvent } from 'react';
import Loader from '../loader/Loader';
import  useAuthen  from '../../hooks/useAuthen';
import generateGuestAccount from '../../utils/generateGuestAccount';

const SignIn = () => {
  const { authenticator } = useAuthen();
  const { isLoading, error, sendForm, setFormValue } = useForm(signInUseFormProps);

  const handleBlur = (name: string) => (e: ChangeEvent<HTMLInputElement>) => setFormValue(name, e.target.value);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { result } = await sendForm();
    if (result) {
      authenticator(result);
      (e.target as HTMLFormElement).reset();
    }
  };

  const handleSubmitGuestAccount = (e: FormEvent) => {
    const [name,username, passowrd] = generateGuestAccount();
    setFormValue(baseInputProps.name.name, name!);
    setFormValue(baseInputProps.username.name, username!);
    setFormValue(baseInputProps.password.name, passowrd!);
    handleSubmit(e);
  };

  return (
    <section className="form-wrapper">
      {isLoading && <Loader />}

      <form className="form">
        <h1 className="form__title">Sign In</h1>

        {error.msg && <span className="form__error">{error.msg}</span>}

        <div className="form__cont-main">
          <div className="form__cont-input">
            <label className="form__label" htmlFor="name">
              Name
            </label>
            <input className="form__input" {...baseInputProps.name} onBlur={handleBlur(baseInputProps.name.name)} />
          </div>
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
            Have an account?
            <Link to={'/log-in'}>Log in now</Link>
          </p>

          <button onClick={handleSubmit} className="btn btn-submit hover">
            Submit
          </button>
          <button onClick={handleSubmitGuestAccount} className="btn hover btn-guest ">
            Use guest account
          </button>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
