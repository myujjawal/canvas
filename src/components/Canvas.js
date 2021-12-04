import React, { useRef, useState } from "react";
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
  // const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  console.log(position);
  const bind = useDrag(
    ({ offset: [x, y] }) => {
      console.log(x, y, position);
      const [, , z] = position;
      // x=position[0];
      // y=position[1];
      setPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      position={position}
      {...bind()}
      ref={ref}
      // scale={clicked ? 1.5 : 1}
      // onClick={(event) =>console.log(ref.current.position)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1, 0, 0]} />
      <Box position={[1, 0, 0]} />
    </Canvas>
  );
}
