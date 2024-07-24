
// this defines styling properties. Just like a container
import React from 'react'

function Container({children}) {
  return <div className='w-auto, h-auto, and max-w-full'>{children}</div>;
  
}

export default Container