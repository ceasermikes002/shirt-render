import {Canvas} from '@react-three/fiber'
import {Environment,Center} from '@react-three/drei'
import Shirt from './Shirt'
import CameraRig from './CameraRig'
import BackDrop from './Backdrop'
const CanvasModal = () => {
  return (
    <Canvas
    shadows
    camera={{position:[0,0,0],fov:25}} 
    >
      <ambientLight intensity={0.5}/>
      <Environment preset="city"/>
      <CameraRig>
        <BackDrop/>
      <Center>
      <Shirt/>  
      </Center> 
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModal