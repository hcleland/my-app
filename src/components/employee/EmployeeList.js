import React, { Component } from 'react'
import { withRouter } from 'react-router'


export default class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h2>All Employees</h2>
                {
                    this.props.employees.map(employee => {
                        return <EmployeeList key={employee.id} employee={employee.name} {...this.props} />
                    })
                }
            </section>
        )
    }
}