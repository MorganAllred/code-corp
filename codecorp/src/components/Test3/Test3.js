import React, { useEffect, useState } from "react";
import "./Test3.css";
import frown from "./frown.png"
import smile from "./smile.png"

const SmileBuzz = () => {
    const [values, setValues] = useState([]);
    const MAX_NUMBER = 100;

    useEffect(()=> {    
        let valArray = [];
        for (let i = 1; i < MAX_NUMBER; i++) {
            if (i % 3 === 0 && i % 5 === 0) valArray = [...valArray, 'fizzbuzz'];
            else if (i % 3 === 0) valArray = [...valArray, 'fizz'];
            else if (i % 5 === 0) valArray = [...valArray, 'buzz'];
            else valArray = [...valArray, `${i}`]
        }
        
        setValues(valArray);
        console.log(valArray);
    }, [])



  return (
    <div className="container">
        <ul>
            {values.map((val, idx) =>
                <li key={idx}>{val === 'fizzbuzz' ? 
                    <>
                        <label>{idx+1}</label>
                        <img src={smile} alt="smiley-face"/>
                        <img src={frown} alt="frowney-face"/>
                    </> : val === 'fizz' ? 
                    <>
                        <label>{idx+1}</label>
                        <img src={smile} alt="smiley-face"/> 
                    </>
                        : val === 'buzz' ? 
                    <>
                        <label>{idx+1}</label>
                        <img src={frown} alt="frowney-face"/>
                    </> : <label>{idx+1}</label>}
                </li>
            )}
        </ul>
    </div>
  );
}

export default SmileBuzz;
