import React from 'react'

export default function SectionTitle({title}) {
  return (
    <>
      <div className='flex gap-10 items-center py-10 ssm:flex-col'>
        <h1 className='text-secondary text-3xl font-semibold'>{title}</h1>
        <div className='w-60 h-[1px] bg-tertiary'></div>
      </div>
    </>
  )
}
