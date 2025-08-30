import React from 'react'

const Background = () => {
  return (
    <div className='bg-zinc-800 z-2 w-full left-0 top-0 h-screen absolute' >
        <div className='absolute top-[10%] text-zinc-900 font-semibold left-[50%] -translate-y-[50%] -translate-x-[50%] ' >Your Tasks</div>
        <div className='absolute top-[50%] text-zinc-900 font-semibold text-9xl left-[50%] -translate-y-[50%] -translate-x-[50%] ' >Docs.</div>
    </div>
  )
}

export default Background