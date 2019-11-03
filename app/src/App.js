import { useGlobal, setGlobal } from 'reactn';
// import './globalState';
import React, { useState, useEffect} from 'react';
import MyCheckbox from './MyCheckbox';
import Toggle from './MyToggle';
import {Button, Card, Checkbox, Label} from 'semantic-ui-react';


const alignStyles = {width: '80%', margin: '5px auto', padding: '5px', display: 'flex', alignItems: 'center'}                    
const cardStyles = {border: '1px solid deeppink', color: 'dodgerblue', ...alignStyles}
const labelContainer = {border: '5px solid dodgerblue', width: '76%', margin: '2px auto', display: 'flex', 
              alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around' }
const testStyles = {width: '14%', margin: '4px', padding: '1px', border: '1px solid seagreen', 
                    backgroundColor: 'ghostwhite'}
const divStyles = {display: 'flex', justifyContent: 'center'}
const buttonFormat = {padding: '2px', margin: '4px',  border: '1px solid red', borderRadius: '4px', outlineStyle: 'none'}
const labelStyle = { border: 'px solid black', display: 'flex', width: '10%', margin: '0 auto', justifyContent: 'center', alignItems: 'center'}

function App() {

  const arr = ['first', 'second', 'third'];
  const [toggleTracker, setToggleTracker] = useGlobal('toggleTracker');
  const [count, setCount] = useGlobal('count');

  // This is one way to get 
  // const [toggleTracker] = useGlobal('toggleTracker');
  // const [count] = useGlobal('count');
  
  const resetLogger = () => {
    setToggleTracker([]);    // this can used similarly to setGlobal
    setCount(0);


    // setGlobal({
    //   toggleTracker: [],
    //   count: 0,
    // })

  }
 

  return (
    <div>
      <div style = {cardStyles}>
        <Toggle />
        {arr.map((item, index) => (
            <MyCheckbox key = {index} itemProp = {item}          
            />
          ))}
          
        
      <Button onClick = {resetLogger} basic color='pink' > reset toggle logger</Button>
      <Label style = {labelStyle} color = 'pink' size = 'huge'> {count }</Label>
      </div>
     
      { toggleTracker.length
         ?
        <div style = {labelContainer}>
          {toggleTracker.map( (item, index) => (
            <Card style = {testStyles} key = {index}>
              <div style = {divStyles}>
                <button style = {buttonFormat} >  Toggle: {item.name.itemProp} </button>  
              </div>
              <div style = {divStyles}>
                <button style = {buttonFormat} >  State: {item.state.toString()} </button>    
              </div>            
            </Card>
            ))}        
        </div>
          :
        <Label style = {{display: 'flex', width: '10%', margin: '0 auto', justifyContent: 'center'}} color = 'red'> no data yet </Label>     


      }    
      
    </div>

  );
}

export default App;
