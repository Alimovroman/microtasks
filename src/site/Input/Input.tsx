import React, {ChangeEvent, FC} from 'react';

type InputPropsType = {
    textForInput: string
    changeInput: (text: string) => void
}
export const Input: FC<InputPropsType> = ({textForInput, changeInput}) => {
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        changeInput(e.currentTarget.value)
    }
    return (
        <input value={textForInput} onChange={onChangeInput}/>
    );
};

