import { SCAppRegistration } from "./AppRegistration.style";
import { useNavigate } from "react-router-dom";



export const AppRegistration = () => {
  const navigate = useNavigate();
  const onRegistrationPage = () => {
    navigate("/registration-page");
  };
    return (
        <SCAppRegistration>
                 <span>
          У вас нет аккаунта? <a href="http://localhost:5174/registration-page" onClick={onRegistrationPage}>Зарегистрироваться</a>
        </span>
        <p>Войти с помощью</p>
        <div className="icons-wrapper">
          <a className="reg__link google-link" href="#">
            <img src="./img/icons/google.svg" alt="Google" />
          </a>
          <a className="reg__link google-plus-link" href="#">
            <img src="./img/icons/google-plus.svg" alt="Google Plus" />
          </a>
          <a className="reg__link yandex-link" href="#">
            <img src="./img/icons/yandex.svg" alt="Yandex" />
          </a>
          <a className="reg__link mail-ru-link" href="#">
            <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
          </a>
        </div>
        </SCAppRegistration>
    )
}