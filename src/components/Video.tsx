import type { ReactNode as TReactNode } from 'react'

export const Video = ({
  children,
  videoUrl,
}: {
  children: TReactNode
  videoUrl: string
}) => {
  console.log('videoUrl', videoUrl)

  return (
    <div className='flex w-full flex-col gap-6 md:flex-row md:gap-9'>
      <div className='flex size-full flex-[50%] bg-gray-700'>
        <div className='flex h-[300px] w-full items-center justify-center text-white'>
          Play
        </div>
      </div>
      <div className='flex-[50%]'>
        {children}
      </div>
    </div>
  )
}
