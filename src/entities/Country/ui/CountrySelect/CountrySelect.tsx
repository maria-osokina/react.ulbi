import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { Country } from "../../model/types/country";
import { memo, useCallback } from "react";
 
interface CountrySelectProps { 
    className?: string;
    value?: string;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}
 
const options = [
    {value: Country.Russia, content: Country.Russia},
    {value: Country.Belarus, content: Country.Belarus},
    {value: Country.Ukraine, content: Country.Ukraine},
    {value: Country.Kazakhstan, content: Country.Kazakhstan},
    {value: Country.Armenia, content: Country.Armenia},    
]

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
    const {t} = useTranslation();

    const onChangeHadler = useCallback((value: string) => {
        onChange?.(value as Country);
    },[onChange]);

    return (
        <Select 
            className={classNames('', {}, [className])}
            label={t('Укажите страну')} 
            options={options} 
            value={value}
            onChange={onChangeHadler}
            readonly={readonly}
        /> 
    );
});