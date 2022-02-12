import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Earth from './components/earth/Earth';

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;



function App() {
  return <>
    <CanvasContainer>
      
      <Canvas style={ {position: 'fixed'}}>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  </>
}

export default App;
