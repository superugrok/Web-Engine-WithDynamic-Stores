import React, { useRef } from "react";
import classes from "@Styles/screens/Cabinet/LoginPage.module.scss";
import ReactDOM from "react-dom";
import closeIcon from "@Images/screens/Cabinet/loginPage/modal-close.svg";
import { Link } from "react-router-dom";
import { sendAuthUserData } from "../../../../api/screens/Cabinet/auth";
import { getUserActions } from "@Store/actions/getActions";
import { useDispatch } from "react-redux";
import { IUserStatusData } from "screens/Cabinet/auth";

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const userAuthActions = getUserActions(dispatch);
  const userStatusActions = getUserActions(dispatch);

  const loginRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const rememberMeRef = useRef<HTMLInputElement>();

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const userAuthData = {
      userLogin: loginRef.current.value,
      password: passwordRef.current.value,
      rememberMe: rememberMeRef.current.checked,
      userIdentKey: null,
    }
    sendAuthUserData(userAuthData)
      .then(
      (userStatusData : IUserStatusData) => {
        if(userStatusData) {
          userAuthActions.changeAuth(true);
          userStatusActions.changeStatusData(userStatusData);
          localStorage.setItem("userIdentKey", userStatusData.userIdentKey);
          localStorage.setItem("userLogin", userStatusData.userLogin);
        }
      });
  };

  return ReactDOM.createPortal(
    <div className={classes.LoginPage}>
      <div className={classes.LoginDialog}>
        <Link to="/"><img src={closeIcon} alt="close dialog" className={classes.CloseIcon} /></Link>
        <div className={classes.DialogBox}>
          <div className={classes.BoxHeader}>
            <span className={classes.HeaderUserIcon} />
            <span className={classes.HeaderTitle}>Введите ваш ник</span>
          </div>

          <form className={classes.BoxLogin}>
            <input
              ref={loginRef}
              placeholder="Ник игрока"
              className={classes.BoxNick}
              type="latin-name"
            />
            <input
              ref={passwordRef}
              placeholder="Пароль"
              className={classes.BoxPassword}
              type="password"
              name="password"
              autoComplete="on"
            />

            <div className={classes.BoxFooter}>
              <div className={classes.LoginRememberMe}>
                <input
                  ref={rememberMeRef}
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                />
                <label htmlFor="rememberMe">Запомнить меня</label>
              </div>
              <button
                className={classes.BoxButton}
                onClick={(e) => onClickHandler(e)}
              >
                Подтвердить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    , document.querySelector("#root"));
};

export default LoginPage;