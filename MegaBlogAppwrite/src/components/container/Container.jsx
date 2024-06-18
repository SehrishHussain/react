import React from 'react'
// this defines styling properties. Just like a container
function Container() {
  return (
    <div className='w-full max-w-7xl mx-auto
    px-'>
      {children}
    </div>
  )
}

export default Container
