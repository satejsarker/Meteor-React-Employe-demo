import React from 'react';
import ReactDOM from 'react-dom';

import EmpLoyeeList from './components/EmployeList';

const App=()=>{
  return (
    <div>
      <EmpLoyeeList/>
      </div>
  );
};

// after meteor load in the browser , render my app to dom 
Meteor.startup(()=>{
   ReactDOM.render( < App /> , document.querySelector('.container'));
})