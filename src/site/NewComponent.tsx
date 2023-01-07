import React, {FC} from 'react';
import {StudentType} from "./Main";

type NewComponentType = {
    students: Array<StudentType>
}
const NewComponent: FC<NewComponentType> = ({students}) => {
    let cars = [
        {car: 'bmw', year: 2019},
        {car: 'mazda', year: 2021},
        {car: 'audi', year: 2021},
    ]
    return (
        <div>
            {students.map((s, i) => {
                return (
                    <div key={i}>
                        {`${s.name} lives in ${s.city} and he ${s.age} years old`}
                    </div>
                )
            })}
            <table>
                <tr>
                    <th>car</th>
                    <th>year</th>
                </tr>
                    {cars.map((c, i) => {
                        return (
                            <tr key={i}>
                                <td>{c.car}</td>
                                <td>{c.year}</td>
                            </tr>
                        )
                    })}
            </table>

        </div>
    );
}
    ;

    export default NewComponent;