import { useState, Suspense } from 'react'; 
import { motion, MotionConfig } from 'motion/react';
import Scene from './components/3d/Scene'; 
export default function App() {
  const [isFullscreen, setFullscreen] = useState(false);
  return (
    <MotionConfig>
      <div 
      data-is-fullscreen={isFullscreen} 
      onClick={() => setFullscreen(!isFullscreen)}>
        <motion.h1 layout> this is somomething</motion.h1>
        <motion.div layout> 
          <Suspense>
            <Scene isFullscreen={isFullscreen} />
          </Suspense>
        </motion.div>
      </div>
    </MotionConfig>
  )
}

