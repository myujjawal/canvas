import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Canvas from "./components/Canvas";
import PropertiesPanel from "./components/PropertiesPanel";
function App() {
  //Making the panel Resizable
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
  const boxClicked = (position) => {
    console.log(position.x);
    setX(position.x);
    setY(position.y);
  };
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <div
          ref={sidebarRef}
          className="app-sidebar"
          style={{ width: sidebarWidth }}
          onMouseDown={(e) => e.preventDefault()}
        >
          <Canvas className="app-sidebar-content" boxClicked={boxClicked} />
          <div className="app-sidebar-resizer" onMouseDown={startResizing} />
        </div>
        <div className="app-frame">
          <PropertiesPanel x={x} y={y} />
        </div>
      </div>
    </div>
  );
}

export default App;
