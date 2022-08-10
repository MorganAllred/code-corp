import React, { useState } from 'react';
import './Test1.css';

const LowerCaseFilter = () => {
  const [input, setInput] = useState('');
  const [letter, setLetter] = useState('');
  const [letterCount, setLetterCount] = useState('');

  const mostFrequentLowerCaseLetter = (text) => {
    const letterArray = text.split('');
    const letterMap = new Map();

    // iterate through and put lowercase elements into the map if lowercase, counting if there are multiples
    letterArray.forEach(element => {
      if(letterMap.has(element)){
        let val = letterMap.get(element);
        letterMap.set( element, val ? val+1 : 0)
      }else{
        if(!isNaN(element)){ 
          // is number, do nothing 
        }else{
          if(element === element.toLowerCase()){
            letterMap.set(element, 1);
          }
        }
      }
    });
    
    // Sort the array in descending order to check for multiple characters of the same count.
    const sortedValues = [...letterMap.entries()].sort((a, b) => {
      if (a[1] > b[1]) return -1;
      else if (a[1] < b[1]) return 1;
      else return 0;
    })

    const highestCount = sortedValues[0][1];
    const highestValues = sortedValues.filter((e) => e[1] === highestCount)

    let highestLetterArray = [];

    highestValues.forEach((obj) => {
      highestLetterArray.push(obj[0])
    })

    setLetter(highestLetterArray.join(','));
    setLetterCount(highestCount);
  }

  const handleParse = () => {
    if(input){
      mostFrequentLowerCaseLetter(input);
    }
  }

  return (
    <div className="container">
        <h2>Lower Case Filter</h2>
        <label>Enter a sentence to be parsed:</label>
        <textarea rows="8" onChange={(e) => setInput(e.target.value)}></textarea>
        <button onClick={handleParse}>Parse</button>
        <label>Letter: {letter}</label>
        <label>Count: {letterCount}</label>
    </div>
  );
}

export default LowerCaseFilter;