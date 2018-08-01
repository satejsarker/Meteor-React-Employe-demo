import React,{Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data'
import { Employees } from '../../imports/collections/employees';
import EmpoyeeDetails from './EmpoyeeDetails'

const per_page=20;
class EmpLoyeeList extends Component{
    componentWillMount(){
        this.page=1;
    }
    handelButtonClick(){
Meteor.subscribe('employees', per_page * this.page);
this.page+=1;
console.log(this.page)
    }
    render(){
    return(
        <div>
            <div className="employee-list">
                {this.props.employees.map(employee=> <EmpoyeeDetails employee={employee} key={employee._id}/>)}
                </div>
                <button onClick={this.handelButtonClick.bind(this)} className="btn btn-primary">
                    Load More..
                    </button>
            </div>
    )
}

}
export default createContainer (()=>{
    //set up subcriptions
    Meteor.subscribe('employees',per_page);
    //retrun value obj will be props to employlist
    return {employees:Employees.find({}).fetch()}
},EmpLoyeeList);