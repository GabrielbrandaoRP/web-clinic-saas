import React from 'react'



type ColProps = {
    label: string;
    icon?: React.ReactNode
}

export const CustomTableCol = ({label, icon} : ColProps) => {
  return (
    <div className="flex items-center justify-center gap-1">
      {icon}
      {label}</div>
  )
}
