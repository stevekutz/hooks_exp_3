import React, {useEffect} from "react";

function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = React.useState(false);
  const style = {
    on: {
      backgroundColor: "green"
    },
    off: {
      backgroundColor: "grey"
    }
  };

  useEffect(() => {
    console.log("isToggleOn Toggle_2 state is: ", isToggleOn);
  }, [isToggleOn]);

  return (
    <div>
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