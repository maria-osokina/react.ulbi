import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
 
interface LoginFormProps { className?: string;}
 
export const LoginForm = memo(({ className }: LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const { username, password, error, isLoading } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string)=>{
        dispatch(loginActions.setUsername(value));
    },[dispatch])

    const onChangePassword = useCallback((value: string)=>{
        dispatch(loginActions.setPassword(value));
    },[dispatch])

    const onLoginClick = useCallback(()=>{
        dispatch(loginByUsername({username, password}));
    },[dispatch, password, username])
    
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')}></Text>
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR}/>}
            <Input 
                placeholder={t('Введите username')} 
                type="text" 
                className={cls.input} 
                autofocus 
                onChange={onChangeUsername}
                value={username}
            />
            <Input 
                placeholder={t('Введите пароль')} 
                type="text" 
                className={cls.input} 
                onChange={onChangePassword}
                value={password}
            />
            <Button 
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});