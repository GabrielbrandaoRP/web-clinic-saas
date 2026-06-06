import React from 'react'

type SizeVariant = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
type WeightVariant = "thin" | "normal" | "medium" | "semibold" | "bold" | "black" 
type HLogoProps = {
    label: string,
    //size: SizeVariant,
   // weight: WeightVariant
}
export const HLogo = ({label} : HLogoProps) => {
  return (
    <>
     <h1 className={`text-4xl font-bold`}>
        <span className='text-transparent bg-clip-text bg-linear-to-br from-orange-400 to-violet-500'>
            {label}
        </span>
     </h1>
    </>
  )
}
