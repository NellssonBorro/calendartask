

// export default function Body(){
//     return(
//         <div className="min-h-svh bg-orange-400">
//             THIS IS MY BODY, WRITTEN FOR YOU. AS YOU VIEW IT, REMEMBER ME.
//         </div>

//     )
// }

import { useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Body() {
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure()
  const [hidden, setHidden] = useState(!isOpen)

  return (
    <div className="min-h-svh bg-orange-400">
      <button className='bg-blue-600 text-white rounded-lg p-4 m-2' {...getButtonProps()}>Toggle Me</button>
      <div>THIS IS MY BODY, WRITTEN FOR YOU. AS YOU VIEW IT, REMEMBER ME.</div>
      <motion.div
        {...getDisclosureProps()}
        hidden={hidden}
        initial={false}
        onAnimationStart={() => setHidden(false)}
        onAnimationComplete={() => setHidden(!isOpen)}
        animate={{ width: isOpen ? 500 : 0 }}
        style={{
          background: 'yellow',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'absolute',
          right: '0',
          height: '100vh',
          top: '0',
        }}
      >
        welcome home
      </motion.div>
    </div>
  )
}