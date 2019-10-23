import React, {useEffect} from "react";

function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = React.useState(false);
  const style = {
    on: {
      backgroundColor: "green",
      outlineStyle: 'none',
      borderRadius: '5px',
    },
    off: {
      backgroundColor: "grey",
      outlineStyle: 'none',
      borderRadius: '5px',
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

export default Toggle;