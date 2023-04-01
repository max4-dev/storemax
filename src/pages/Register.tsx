import {FC, MouseEvent, useRef} from 'react';
import { InputTypes } from './Login';

const Register: FC = () => {
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleShow = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (passwordRef.current?.type === InputTypes.PASSWORD) {
      passwordRef.current.type = InputTypes.TEXT;
    } else if (passwordRef.current?.type === InputTypes.TEXT) {
      passwordRef.current.type = InputTypes.PASSWORD;
    }
  }

  return ( 
    <>
    <section className="login">
      <h2 className="title login__title">Регистрация</h2>
      <form className="login__form" action="#">
        <label className="login__label">
          Почта
          <input className="login__input" type="text" />
        </label>
        <label className="login__label">
          Имя
          <input className="login__input" type="text" />
        </label>
        <label className="login__label login__password">
          Пароль
          <input ref={passwordRef} className="login__input login__password-input" type={InputTypes.PASSWORD} />
          <button onClick={handleShow} className="login__password-btn"><img src="images/icons/eye.svg" alt="" /></button>
        </label>
        <label className="login__checkbox-label">
          <input className="login__checkbox" type="checkbox" />
          <span></span>
          <p className="login__text">Я согласен(-нa) с условиями пользовательского соглашения</p>
        </label>
        <button className="login__btn btn" type="submit">Зарегистрироваться</button>
      </form>
    </section></>
   );
}
 
export default Register;