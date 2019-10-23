import React, {useEffect} from 'react';
import Toggle from './Toggle';
import {Checkbox, Label} from 'semantic-ui-react';


const MyCheckbox = (thingy, data, checked) => {
  const [isSlideOn, setSlider] = React.useState(false);
  const style = {
    on: {
      fontWeight: 'bold',
      fontColor: 'green',
      padding: '10px',

    },
    off: {
      fontWeight: 'lighter',
      color: 'pink',
      padding: '10px',
    },
  };

  const handleSliderValue = (data, e) => {
    console.log('current thingy is ', thingy);
    //console.log('current data is ', data);
  }

  useEffect(()=> {
    console.log('correct toggle state is ', isSlideOn);
  }, [isSlideOn] ); 

  return (
    
      <div style = {{width: '20%'}}>
        <Checkbox 
          toggle
          label = {thingy.thingy}
          onClick={() => setSlider(!isSlideOn)}
          onChange = {handleSliderValue}
          name = {thingy.thingy}
          style={isSlideOn ? style.on : style.off}
        />
      </div>
  )
  
}

const alignStyles = {width: '80%', margin: '5px auto', padding: '5px', display: 'flex'}                    
const cardStyles = {border: '1px solid deeppink', color: 'dodgerblue', ...alignStyles}

function App({isSlideOn}) {

  const arr = ['first', 'second', 'third'];

  return (
    <div style = {cardStyles}>
      <Toggle />
      {arr.map((item, index) => (
 
          <MyCheckbox key = {index} thingy = {item}/>

        ))}

    </div>
  );
}

export default App;
