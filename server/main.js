// only executed on the server
import {Meteor} from 'meteor/meteor';
import _ from 'lodash';
import {image,helpers} from 'faker';
import { Employees } from '../imports/collections/employees';

Meteor.startup(()=>{
    //for making fake data 


    //check to see if the data is exists in the collections
     // see if collection is has any record

     const numberRecords=Employees.find({}).count();
     console.log(numberRecords)
     if(!numberRecords){
        _.times(5000,()=>{
            const avatar=image.avatar();
             const{name,email,phone}=helpers.createCard();
             Employees.insert({
                name,
                email,
                phone,
                avatar
             });   
        });
     }

     Meteor.publish('employees', (per_page)=>{
         return Employees.find({},{limit:per_page})
     })

});