import { useGlobal, setGlobal } from 'reactn';
// import './globalState';
import React, { useState, useEffect} from 'react';
import {Checkbox} from 'semantic-ui-react';


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
  
      // using setGlobal to update global object      setGlobal({ toggleTracker: [...toggleTracker, currentToggleState]})
      
      // using updater function to update toggle tracker global variable
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

  export default MyCheckbox;