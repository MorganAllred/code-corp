import React, { useState } from 'react';
import LowerCaseFilter from './components/Test1/Test1';
import SmileBuzz from './components/Test3/Test3';
import './App.css';

const App = () => {

  const [test, setTest] = useState(1);

  return (
    <>
      <div className="nav">
        <ul>
          <li onClick={() => setTest(1)}>Test 1</li>
          <li onClick={() => setTest(3)}>Test 3</li>
        </ul>
      </div>
      <div className="portal">
        {test === 1 ? <LowerCaseFilter /> : null}
        {test === 3 ? <SmileBuzz /> : null}
      </div>
    </>

  );
}

export default App;