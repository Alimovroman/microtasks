import React, { FC} from 'react';

type ButtonPropsType = {
    name: string
    addMessage: () => void
}
const OnlyButton:FC<ButtonPropsType> = ({name, addMessage}) => {
    const onClickHandler = () => {
        addMessage()
    }

    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};

export default OnlyButton;