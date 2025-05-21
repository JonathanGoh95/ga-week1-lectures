// src/App.jsx

import { useState } from 'react';
import './App.css';


const App = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);
const [mode, setMode] = useState('light');
//   const [isUser, setIsUser] = useState({
//   firstName: 'John',
//   lastName: 'Goh',
//   hasPets: false,
//   age: 30
// });

  // console.log('Our isDarkMode state value is:', isDarkMode);
  // // console.log('Our user state value is:', isUser);
  // const handleDarkMode = () => {
  //   console.log('Dark mode!')
  //   setIsDarkMode(true);
  // }

  // const handleLightMode = () => {
  //   console.log('Light mode!')
  //   setIsDarkMode(false);
  // }

const handleMode = (modeValue) => {
  console.log(modeValue);
  setMode(modeValue);
}

  return (
    <>
    {/* <div className={isDarkMode ? 'dark' : 'light'}> */}
      <div className={mode}>
      <h1>Hello world!</h1>
      {/* <h2>Hello, my name is {isUser.firstName} {isUser.lastName}. I am {isUser.age} years old and I {isUser.hasPets ? 'have pets.': 'do not have pets.'}</h2> */}
      </div>
      <div>
        {/* <button onClick = {handleDarkMode}>Dark Mode</button>
        <button onClick = {handleLightMode}>Light Mode</button> */}
        <button onClick = {() => handleMode('dark')}>Dark Mode</button>
        <button onClick = {() => handleMode('light')}>Light Mode</button>
        <button onClick = {() => handleMode('neon')}>Neon Mode</button>
        <button onClick = {() => handleMode('night')}>Night Mode</button>
      </div>
    </>
  );
};

export default App;
