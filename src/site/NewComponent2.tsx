import React, {FC} from 'react';
import Button from "./Button";

type PropsType = {
    curentMoney: Array<{ banknots: string, value: number, number: string}>
    onFilterMoney: (banknots: 'rubls' | 'dollars' | 'all') => void
}

const NewComponent2: FC<PropsType> = ({curentMoney, onFilterMoney}) => {
    return (
        <div>
            <ul>
                {curentMoney.map((e,i) => {
                    return (
                        <li key={i}>
                            <span>{e.banknots} </span>
                            <span>{e.value} </span>
                            <span>{e.number} </span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Button title={'all'} callback={() => onFilterMoney('all')}/>
                <Button title={'Dollars'} callback={() => onFilterMoney('dollars')}/>
                <Button title={'RUBLS'} callback={() => onFilterMoney('rubls')}/>
            </div>
        </div>
    );
};

export default NewComponent2;