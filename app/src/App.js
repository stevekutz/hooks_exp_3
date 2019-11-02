import { useGlobal, setGlobal } from 'reactn';
// import './globalState';
import React, { useState, useEffect} from 'react';
import Toggle from './Toggle';
import {Button, Card, Checkbox, Label} from 'semantic-ui-react';


// setGlobal({
//   toggleTracker: [],
// })

const MyCheckbox = (itemProp) => {
  const [isSlideOn, setSlider] = useState(false);
  //const [isSlideOn, setSlider] = React.useState(false);
  const [toggleTracker, setToggleTracker] = useGlobal('toggleTracker');
  const [count, setCount] = useGlobal('count');

  const style = {
    on: {
      fontWeight: 'bold',
      color: 'blue',
      padding: '5px',

    },
    off: {
      fontWeight: 'lighter',
      fontColor: 'pink',
      padding: '5px',
    }, 
  };

  const handleSliderValue = () => {
    console.log('current itemProp value is ', itemProp);


    let currentToggleState = {
      name: itemProp,
      state: isSlideOn,
    }

    setToggleTracker([...toggleTracker, currentToggleState]);
    setCount(count + 1);
  }

  useEffect(()=> {
    console.log('correct toggle state is ', isSlideOn);
    console.log('added state is ', toggleTracker);
  }, [isSlideOn, toggleTracker] ); 

  return (
    
      <div style = {{width: '20%'}}>
        <Checkbox 
          toggle
          label = {itemProp.itemProp}
          onClick={() => setSlider(!isSlideOn)}
          onChange = {handleSliderValue}
          name = {itemProp.itemProp}
          style={isSlideOn ? style.on : style.off}
        />

      </div>
  )
  
}

const alignStyles = {width: '80%', margin: '5px auto', padding: '5px', display: 'flex'}                    
const cardStyles = {border: '1px solid deeppink', color: 'dodgerblue', ...alignStyles}
const labelContainer = {border: '5px solid dodgerblue', width: '76%', margin: '2px auto', display: 'flex', 
              alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around' }
const testStyles = {width: '14%', margin: '4px', padding: '1px', border: '1px solid seagreen', 
                    backgroundColor: 'ghostwhite'}
const divStyles = {display: 'flex', justifyContent: 'center'}
const buttonFormat = {padding: '2px', margin: '4px',  border: '1px solid red', borderRadius: '4px'}

function App() {

  const arr = ['first', 'second', 'third'];
  const [toggleTracker, setToggleTracker] = useGlobal('toggleTracker');
  const [count, setCount] = useGlobal('count');

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
      <Label> {count }</Label>
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
