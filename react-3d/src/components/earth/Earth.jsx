import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three'
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg';
import EarthNormalMap from '../../assets/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../../assets/textures/8k_earth_clouds.jpg';

export default function Earth(props) {

  const [colorMap, normalMap, specularMap, cloudsMap] =
    useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap])

  
    //cant use <div> because a canvas cant have a div components
    return <>
      {/* react three fiber has all components in lowercase */ }
      <Stars
        radius={ 300 }
        depth={ 60 }
        count={ 10000 }
        factor={ 7 }
        saturation={ 0 }
        fade={ true }
      />
      
      <OrbitControls
        enableZoom={ true }
        zoomSpeed={ 0.5 }
        enablePan={ true }
        panSpeed={ 0.5 }
        enableRotate={ true }
        rotateSpeed={ 0.4 }
      />

      {/* <ambientLight intensity={ 1 } /> */}
      <pointLight
        color="#f5f7f5"
        position={ [2, 0, 2] }
        intensity={ 1.2}
      />
      <mesh>
        <sphereGeometry args={ [2.005, 32, 32] } />
        <meshPhongMaterial
          map={ cloudsMap }
          opacity={ 0.4 }
          depthWrite={ true }
          transparent={ true }
          side={ THREE.DoubleSide }
          metalness={ 0.4 }
          roughness={ 0.7}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={ [2, 32, 32] } />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={ colorMap }
          normalMap={ normalMap}
        />
      </mesh>
    </>
  
}
