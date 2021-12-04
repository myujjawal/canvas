import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Canvas from "./components/Canvas";
import PropertiesPanel from "./components/PropertiesPanel";
function App() {
  //****************** Making the panel Resizable **********************
  const sidebarRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  const startResizing = React.useCallback((mouseDownEvent) => {
    setIsResizing(true);
  }, []);

  const stopResizing = React.useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = React.useCallback(
    (mouseMoveEvent) => {
      if (isResizing) {
        setSidebarWidth(
          mouseMoveEvent.clientX -
            sidebarRef.current.getBoundingClientRect().left
        );
      }
    },
    [isResizing]
  );

  React.useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);
  //***************************************************************  */
  //Defining the state of the App
  const [x, setX] = useState(1);
  const [y, setY] = useState(0);
  const [box, setBox] = useState(1);
  const [color, setcolor] = React.useState("orange");
  console.log(color);
  const boxClicked = (position) => {
    setX(position.x);
    setY(position.y);
  };
  return (
    <div className="app-container">
      <Navbar name={box === 1 ? "Box 1" : "Box 2"} />
      <div className="main-container">
        <div
          ref={sidebarRef}
          className="app-sidebar"
          style={{ width: sidebarWidth }}
          onMouseDown={(e) => e.preventDefault()}
        >
          <Canvas
            className="app-sidebar-content"
            boxClicked={boxClicked}
            box={box}
            setBox={setBox}
            color={color}
          />
          <div className="app-sidebar-resizer" onMouseDown={startResizing} />
        </div>
        <div className="app-frame">
          <PropertiesPanel x={x} y={y} color={color} setcolor={setcolor} />
        </div>
      </div>
    </div>
  );
}

export default App;
