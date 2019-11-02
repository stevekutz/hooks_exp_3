// import React, {useEffect} from "react";
import React, {useEffect, useState} from "react";

function MyToggle(props) {
// const [isToggleOn, setIsToggleOn] = React.useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);

  const style = {
    on: {
      backgroundColor: "green",
      outlineStyle: 'none',
      borderRadius: '5px',
      width: '50px'
    },
    off: {
      backgroundColor: "grey",
      outlineStyle: 'none',
      borderRadius: '5px',
      width: '50px'
    },
  };

  useEffect(() => {
    console.log("isToggleOn Toggle_2 state is: ", isToggleOn);
  }, [isToggleOn]);

  return (
    <div style = {{padding: '10px', width: '10%', outlineStyle: 'none'}}>
        <button
          onClick={() => setIsToggleOn(!isToggleOn)}
          style={isToggleOn ? style.on : style.off}
        
        >
          {isToggleOn ? "ON" : "OFF"}
        </button>
        

    </div>


  );
}

export default MyToggle;