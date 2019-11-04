import { useGlobal, setGlobal } from 'reactn';
import React, { useState, useEffect} from 'react';
import MyCheckbox from './MyCheckbox';
import Toggle from './MyToggle';
import {Button, Card, Label} from 'semantic-ui-react';
import './App.css';


const alignStyles = {width: '80%', margin: '5px auto', padding: '5px', display: 'flex', alignItems: 'center'};                    
const cardStyles = {border: '1px solid darkslategray', borderRadius: '4px', color: 'dodgerblue', ...alignStyles};
const labelContainer = {border: '3px solid dodgerblue', width: '76%', margin: '2px auto', display: 'flex', 
              alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around', borderRadius: '8px' };
const testStyles = {width: '100px', margin: '4px', padding: '1px', border: '1px solid seagreen', 
                    backgroundColor: 'ghostwhite', borderRadius: '4px'};
const divStyles = {display: 'flex', justifyContent: 'center'};
const buttonFormat = {padding: '2px', margin: '4px',  border: '1px solid red', borderRadius: '4px', outlineStyle: 'none'};
const buttonTrue = {backgroundColor: 'green', ...buttonFormat};
const buttonFalse = {backgroundColor: 'red', ...buttonFormat};
const labelStyle = { border: 'px solid black', display: 'flex', width: '10%', margin: '0 auto', justifyContent: 'center', alignItems: 'center'};

function App() {

  const arr = ['first', 'second', 'third'];
  const [toggleTracker, setToggleTracker] = useGlobal('toggleTracker');
  const [count, setCount] = useGlobal('count');

  // This is one way to get 
  // const [toggleTracker] = useGlobal('toggleTracker');
  // const [count] = useGlobal('count');
  
  const resetLogger = () => {
    setToggleTracker([]);    // setGlobal can accomplish same task
    setCount(0);

    // setGlobal({
    //   toggleTracker: [],
    //   count: 0,
    // })

  }
 
  useEffect(()=>{

  },[toggleTracker])

  return (
    <div className = 'app'>
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
            <div className = 'card'  key = {index} >
            <Card style = {testStyles}>
              <div style = {divStyles}>
                <Button style = {buttonFormat} >  Toggle: {item.name.itemProp} </Button>  
              </div>
              <div style = {divStyles}>
                <Button style = {!item.state ? buttonTrue : buttonFalse} >  State: {!item.state ? 'True' : 'False'} </Button>    
              </div>            
            </Card>
            </div>
            ))}        
        </div>
        :
        <Label style = {{display: 'flex', width: '10%', margin: '0 auto', justifyContent: 'center'}} color = 'red'> no data yet </Label>     
      }    
      
    </div>

  );
}

export default App;


// style={isToggleOn ? style.on : style.off}
// <Button style = {buttonFormat}>  State: {item.state.toString()} </Button> 
// {isToggleOn ? "ON" : "OFF"}