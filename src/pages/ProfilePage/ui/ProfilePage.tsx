import { classNames } from "shared/lib/classNames/classNames";
import { memo, useCallback, useEffect } from "react";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ProfileCard, fetchProfileData, getProfileError, getProfileIsLoading, getProfileReadonly, profileActions, profileReducer } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { getProfileForm } from "entities/Profile/model/selectors/getProfileForm/getProfileForm";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";

const reducers: ReducersList = {
    profile: profileReducer
}
 
interface ProfilePageProps { className?: string;}
 
const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    
    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    const onChangeFirstName = useCallback((value?: string)=>{
        dispatch(profileActions.updateProfile({first: value || ''}))
    }, [dispatch])

    const onChangeLastName = useCallback((value?: string)=>{
        dispatch(profileActions.updateProfile({lastname: value || ''}))
    }, [dispatch])

    const onChangeCity = useCallback((value?: string)=>{
        dispatch(profileActions.updateProfile({city: value || ''}))
    }, [dispatch])

    const onChangeAge = useCallback((value?: string)=>{
        dispatch(profileActions.updateProfile({age: Number(value || 0)}))
    }, [dispatch])

    const onChangeUsername = useCallback((value?: string)=>{
        dispatch(profileActions.updateProfile({username: value || ''}))
    }, [dispatch])

    const onChangeAvatar = useCallback((value?: string)=>{
        dispatch(profileActions.updateProfile({avatar: value || ''}))
    }, [dispatch])

    const onChangeCurrency = useCallback((currency?: Currency)=>{
        dispatch(profileActions.updateProfile({currency}))
    }, [dispatch])

    const onChangeCountry = useCallback((country?: Country)=>{
        dispatch(profileActions.updateProfile({country}))
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard 
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;