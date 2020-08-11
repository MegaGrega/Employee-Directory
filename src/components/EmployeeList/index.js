import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function EmployeeList() {
    const [employees, setEmployees] = useState([])
    const [sortBy, setSortBy] = useState(true)
    useEffect(() => {
        loadEmployees()

    }, [])

    function loadEmployees() {
        API.getAllEmployees().then(res => {
            const employeeArr = res.data.results.sort(compareLast)
            setEmployees(employeeArr)
            console.log(res.data)
        })
    }
    function compareLast(a, b) {
        if (a.name.last < b.name.last) {
            return -1;
        }
        if (a.name.last > b.name.last) {
            return 1;
        }
        return 0;
    }
    function compareFirst(a, b) {
        if (a.name.first < b.name.first) {
            return -1;
        }
        if (a.name.first > b.name.first) {
            return 1;
        }
        return 0;
    }
    function setByFirst() {
        setEmployees(employees.sort(compareFirst))
        setSortBy(false)
    }
    function setByLast() {
        setEmployees(employees.sort(compareLast))
        setSortBy(true)
    }
    return (
        <div>
            <button onClick={() => setByFirst()}>First Name</button>
            <button onClick={() => setByLast()}>Last Name</button>
            {sortBy ? (
                <ul>

                    {employees.map(person => (
                        <li>Name: {person.name.first} {person.name.last} Email: {person.email} Cell: {person.cell}</li>
                    ))}
                </ul>
            ) : (
                    <ul>

                        {employees.map(person => (
                            <li>Name: {person.name.first} {person.name.last} Email: {person.email} Cell: {person.cell}</li>
                        ))}
                    </ul>
                )}


        </div>
    )
}

export default EmployeeList;