import React, {Dispatch, FC, useState} from 'react';

type InputProps = {
    addMessage: (message: string) => void
}
const FullInput:FC<InputProps> = ({addMessage}) => {
    const [text, setText] = useState<string>('')

    const onChangeTextInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    const onClickHandler = () => {
        addMessage(text)
        setText('')
    }
    return (
        <div>
            <input value={text} onChange={(e) => onChangeTextInput(e)}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

export default FullInput;