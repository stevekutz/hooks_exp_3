import { useGlobal, setGlobal } from 'reactn';
import React, { useState, useEffect} from 'react';
import Toggle from './Toggle';
import {Card, Checkbox, Label} from 'semantic-ui-react';

setGlobal({
  toggleTracker: [],
})

const MyCheckbox = (itemProp) => {
  const [isSlideOn, setSlider] = useState(false);
  //const [isSlideOn, setSlider] = React.useState(false);
  const [toggleTracker, setToggleTracker] = useGlobal('toggleTracker');

  const style = {
    on: {
      fontWeight: 'bold',
      fontColor: 'green',
      padding: '5px',

    },
    off: {
      fontWeight: 'lighter',
      color: 'pink',
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
const labelContainer = {border: '1px solid dodgerblue', width: '86%', margin: '0 auto', display: 'flex', 
              flexWrap: 'wrap', alignItems: 'flexStart', alignContent: 'center'}
const labelStyles = {width: '12%', margin: '2px', padding: '5px', border: '1px solid seagreen', 
                    backgroundColor: 'ghostwhite', display: 'flex', flexDirection: 'column'}

function App() {

  const arr = ['first', 'second', 'third'];
  const [toggleTracker] = useGlobal('toggleTracker');

  return (
    <div>
      <div style = {cardStyles}>
        <Toggle />
        {arr.map((item, index) => (
            <MyCheckbox key = {index} itemProp = {item}          
            />
          ))}
          
          
      </div>

      { toggleTracker.length
         ?
        <div style = {labelContainer}>
          {toggleTracker.map( (item, index) => (
            <Card style = {labelStyles} key = {index}>
            <Label>  Toggle: {item.name.itemProp} </Label>
            <Label>  State: {item.state.toString()} </Label>    
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
