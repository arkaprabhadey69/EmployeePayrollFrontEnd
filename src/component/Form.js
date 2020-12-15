import React, { Component } from 'react'
import Axios from "axios";

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             imgPath:'',
             gender:'',
             salary:'',
             startDate:'',
             dept:'',
             notes:''

        }
    }
    handleNameChange = event =>{
        this.setState({
                name: event.target.value
            })
    }
    handleImgPathChange = event =>{
        this.setState({
            imgPath : event.target.value
            })
    }
    handleGenderChange = event =>{
        this.setState({
            gender : event.target.value
            })
    }
    handleSalaryChange = event =>{
        this.setState({
            salary : event.target.value
            })
    }
    handlesStartDateChange = event =>{
        this.setState({
            startDate : event.target.value
            })
    }
    handleDeptChange = event =>{
        this.setState({
            dept : event.target.value
            })
    }
    handleNotesChange = event =>{
        this.setState({
            notes : event.target.value
            })
    }
    handleSubmit=(event) =>{
        Axios.post('http://localhost:8080/emp/v1/insert', this.state)
        .then(res=>{
            console.log(res);
            alert(res.data.message);
        })
        .catch(err=> {
            console.log(err);
        })
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td><input type='text' value={this.state.name} onChange={this.handleNameChange}/></td>
                        </tr>
                        <tr>
                            <td>Image</td>
                            <td> <input type='text' value={this.state.imgPath} onChange={this.handleImgPathChange}/></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td> <input type='text' value={this.state.gender} onChange={this.handleGenderChange}/></td>
                        </tr>
                        <tr>
                            <td>Salary</td>
                            <td> <input type='text' value={this.state.salary} onChange={this.handleSalaryChange}/></td>
                        </tr>
                        <tr>
                            <td>StartDate</td>
                            <td> <input type='date' value={this.state.startDate} onChange={this.handlesStartDateChange}/></td>
                        </tr>
                        <tr>
                            <td>Department</td>
                            <td> <input type='text' value={this.state.dept} onChange={this.handleDeptChange}/></td>
                        </tr>
                        <tr>
                            <td>Notes</td>
                            <td> <input type='text' value={this.state.notes} onChange={this.handleNotesChange}/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button type='submit'>Add Employee</button></td>
                        </tr>

                    </tbody>
                </table>
                </form>
            </div>
        )
    }
}

export default Form

