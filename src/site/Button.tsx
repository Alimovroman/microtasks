import React, {FC} from 'react';

export type ButtonProps = {
    title: string
    callback: () => void
}
const Button: FC<ButtonProps> = ({title, callback}) => {
    const onClickHandler = () => {
        callback()
    }
    return (
        <>
            <button onClick={() => onClickHandler()}>{title}</button>
        </>
    );
};

export default Button;