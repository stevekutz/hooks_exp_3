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
    
      />

  )
  
  

}


function App() {

  const arr = ['first', 'second', 'third'];

  return (
    <div className="App">
      <Toggle />
      {arr.map((item, index) => (
        <MyCheckbox key = {index} thingy = {item}/>
      ))}
      

    </div>
  );
}

export default App;
