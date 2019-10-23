import React from 'react';
import Toggle from './Toggle';
import {Checkbox} from 'semantic-ui-react';


const MyCheckbox = (thingy) => {
  const [isToggleOn, setIsToggleOn] = React.useState(false);
  
  console.log('label is ', thingy);

  return (
    
      <Checkbox 
        slider
        label = {thingy.thingy}
        onClick={() => setIsToggleOn(!isToggleOn)}
        style = {{border: '1px solid blue', padding: '5px', display: 'flex', alignItems: 'center'}}
      />
  )
  
}

const alignStyles = {width: '80%', margin: '5px auto', padding: '5px', display: 'flex'}                    
const cardStyles = {border: '1px solid deeppink', color: 'dodgerblue', ...alignStyles}

function App() {

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
