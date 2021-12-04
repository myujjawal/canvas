import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useDrag } from "react-use-gesture";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  const [position, setPosition] = useState(props.position);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position;
      setPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );

  const handleClick = () => {
    props.boxClicked(ref.current.position);
    props.setBox(props._id);
  };

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      position={position}
      {...bind()}
      ref={ref}
      // scale={clicked ? 1.5 : 1}
      onClick={handleClick}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "white" : props.color} />
    </mesh>
  );
}

export default function App({ boxClicked, setBox, color, box }) {
  const [color1, setColor1] = useState("orange");
  const [color2, setColor2] = useState("orange");
  useEffect(() => {
    if (box === 1) {
      setColor1(color);
    } else if (box === 2) {
      setColor2(color);
    }
  }, [color]);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box
        position={[-1, 0, 0]}
        boxClicked={boxClicked}
        _id={1}
        setBox={setBox}
        color={color1}
      />
      <Box
        position={[1, 0, 0]}
        boxClicked={boxClicked}
        _id={2}
        setBox={setBox}
        color={color2}
      />
    </Canvas>
  );
}
