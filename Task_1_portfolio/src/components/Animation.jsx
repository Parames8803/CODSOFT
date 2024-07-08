import React from "react";
import "../styles/Animation.css";

const Animation = () => {
  const [width, setWidth] = useState(100);

  useEffect(() => {
    setWidth(0);
  }, []);

  const divStyle = {
    width: `${width}%`,
    height: "100vh", // Full viewport height
    backgroundColor: "blue", // Change this to the desired color
    transition: "width 1s ease-in-out", // Smooth transition animation for width change
  };
  return <div style={divStyle}></div>;
};

export default Animation;
