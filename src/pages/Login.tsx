import { useRef, FC, MouseEvent } from "react";

export enum InputTypes {
  PASSWORD = 'password',
  TEXT = 'text',
}

const Login: FC = () => {
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
        <h2 className="title login__title">Вход</h2>
        <form className="login__form" action="#">
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
            <p className="login__text">Запомнить меня</p>
          </label>
          <button className="login__btn btn" type="submit">Войти</button>
        </form>
      </section>
    </>
   );
}
 
export default Login;