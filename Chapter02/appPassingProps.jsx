import React from 'react';

function App() {
    return (
        < >
            <Employee name="John" age="30" department="Manufacturing"></Employee>
            <Employee name="Malcolm" age="35" department="Engineering" ></Employee>
            <Employee name="Luther" department="Finance"></Employee>
        </ >
    );
}

function Employee(props) {

    return (
        < >
            <span>Name: {props.name} </span>
            <span>Age: {props.age} </span>
            <span>Department: {props.department} </span>
        </ >
    )
}

Employee.defaultProps = {
    name: "Jack",
    age: "45",
    department: "HR"
}

export default App;
