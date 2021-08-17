import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import DataTable from './datatables/Datatable'
// import Data from './datatables/data'
// import Main from './brackets/main';
// import Drag from './brackets/Drag';

// import Login from './Login/Login';
// import LoginMain from './Login/LoginMain';

// import ManagerMain from './Manager/ManagerMain';
import EventMain from './Events/EventMain';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/js/bootstrap.min.js'
// import EventInfo from './Events/EventInfo';
// import EventEdit from './Events/EventInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>

 <EventMain/>
  {/* <ManagerMain/> */}
  {/* <LoginMain/> */}
  {/* <Main/> */}
  {/* <Data/> */}
  {/* <DataTable/> */}
  {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
