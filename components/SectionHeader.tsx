import React from 'react'

interface SectionHeaderProps {
 text:string,
 accent:string,   
}

const SectionHeader = ({text,accent}:SectionHeaderProps) => {
  return (
    <div>
      <h1 className='text-6xl font-extrabold' >{text} <span className='text-amber-800' >{accent}</span></h1>
    </div>
  )
}

export default SectionHeader
