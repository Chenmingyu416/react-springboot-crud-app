import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
        this.returnPage = this.returnPage.bind(this);
    }

    componentDidMount() {
        //this method is called immediately after the componenet is mounted
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data });
        })

    }

    returnPage() {
        this.props.history.push('/employees');
    }


    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">View Employee Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Employee First Name: &nbsp;</label>
                            <div>{this.state.employee.firstName}</div>
                        </div>
                        <div className="row">
                            <label> Employee Last Name: &nbsp;</label>
                            <div>{this.state.employee.lastName}</div>
                        </div>
                        <div className="row">
                            <label> Employee Email ID: &nbsp;</label>
                            <div>{this.state.employee.emailId}</div>
                        </div>


                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button className='btn btn-primary' onClick={this.returnPage}> return </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
