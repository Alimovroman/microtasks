import React, {FC, useState} from 'react';
import NewComponent from "./NewComponent";
import Button from "./Button";
import NewComponent2 from "./NewComponent2";

type MainProps = {
    content: string
}

export type StudentType = {
    name: string
    age: number
    city: string
}
let students: Array<StudentType> = [
    {name: 'Roma', age: 32, city: 'Ryazan'},
    {name: 'masha', age: 32, city: 'Moscow'},
    {name: 'sasha', age: 32, city: 'St. Petersburg'},
    {name: 'Vika', age: 32, city: 'London'},
]
const Main: FC<MainProps> = ({content}) => {
    const [count, setCount] = useState(0)

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])
    const [curentMoney, setCurentMoney] = useState(money)

    function onFilterMoney(banknots: 'rubls' | 'dollars' | 'all')  {
        if (banknots === 'rubls') {
            setCurentMoney(money.filter(e => e.banknots.toLowerCase() === banknots))
        } else if (banknots === 'dollars') {
            setCurentMoney(money.filter(e => e.banknots.toLowerCase() === banknots))
        } else {
            setCurentMoney(money)
        }

    }


    function onClick1() {
        console.log(100200)
    }
    function onClick12(num: number) {
        console.log(num)
    }
    return (
        <div>
            {content}
            <NewComponent students={students} />
            <NewComponent2 curentMoney={curentMoney} onFilterMoney={onFilterMoney}/>
            <div>
                <button onClick={() => setCount(count + 1)}>{count}</button>
                <button onClick={() => setCount(0)}>0</button>
                <Button title={'Button first'} callback={onClick1}/>
                <Button title={'Button second'} callback={() => onClick12(455)}/>
            </div>
        </div>
    );
};

export default Main;