import React, {useState} from 'react'
import Title from './Title';
import Button from './Button';

const ParentComp = () => {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(0);
    const [salary, setSalary] = useState(0);
    return (
        <div>
            <Title count />
            <Button age={age} incrementAge={setAge}>Increment Age</Button>
            <Button salary={salary} incrementSalary={setSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComp