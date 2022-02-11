import React from 'react'

export default function Earth(props) {
    //cant use <div> because a canvas cant have a div components
    return <>
      {/* react three fiber has all components in lowercase */ }
      
      <ambientLight intensity={1} />
      <mesh>
        <sphereGeometry args={ [2, 32, 32] } />
        <meshPhongMaterial color="red" />
      </mesh>
    </>
  
}
