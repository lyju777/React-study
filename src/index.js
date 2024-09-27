import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import Clock from './chapter_04/Clock';
// import CommentList from './chapter_05/CommentList';
// import Accommodate from './chapter_06/Accommodate';
// import ConfirmButton from './chapter_07.jsx/ConfirmButton';
// import LandingPage from './chapter_08/LandingPage';
// import AttendanceBook from './chapter_09/AttendanceBook';
import SignUp from './chapter_11/SignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals          
reportWebVitals();
