import { Mods, classNames } from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";
import { ChangeEvent, memo, useMemo } from "react";

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps { 
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}
 
export const Select = memo((props: SelectProps) => {
    const { 
        className, 
        label, 
        options,
        value,
        onChange,
        readonly
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    }

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option 
                value={opt.value}
                className={cls.option}
                key={opt.value}
            >{opt.content}</option>
        ))
    },[options]);

    const mods: Mods = {};
    
    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span className={cls.label}>{label + '>'}</span>
            )}
            <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readonly}>
                {optionsList}
            </select>
        </div>
    );
});