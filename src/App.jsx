import { useState, Suspense } from 'react'; 
import { motion, MotionConfig } from 'motion/react';
import Scene from './components/3d/Scene'; 
export default function App() {
  const [isFullscreen, setFullscreen] = useState(false);
  console.log(isFullscreen);
  return (
    <MotionConfig>
      <div 
      className='h-screen w-screen grid place-items-center'
      data-is-fullscreen={isFullscreen} 
      onClick={() => setFullscreen(!isFullscreen)}>
        {/* <motion.h1 layout className='absolute top-0 text-white font-semibold'> this is somomething</motion.h1> */}
        <motion.div className='h-screen w-screen'> 
          <Suspense className="h-full w-full" fallback="loading...">
            <Scene isFullscreen={isFullscreen} />
          </Suspense>
        </motion.div>
      </div>
    </MotionConfig>
  )
}

