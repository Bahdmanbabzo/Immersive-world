import { useState, Suspense } from 'react'; 
import { motion, MotionConfig } from 'motion/react';
import Scene from './components/3d/Scene'; 
import './style.css'; 

export default function App() {
  const [isFullscreen, setFullscreen] = useState(false);
  console.log(isFullscreen);
  return (
    <MotionConfig>
      <div 
      className='h-screen w-screen relative p-0.5'
      data-is-fullscreen={isFullscreen} 
      onClick={() => setFullscreen(!isFullscreen)}>
        {/* <motion.h1 layout className='absolute top-0 text-white font-semibold'> this is somomething</motion.h1> */}
        <div id="card" className='h-full w-full'> 
          <Suspense className="h-full w-full" fallback="loading...">
            <Scene isFullscreen={isFullscreen} />
          </Suspense>
        </div>
      </div>
    </MotionConfig>
  )
}

