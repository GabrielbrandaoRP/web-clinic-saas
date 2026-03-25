"use client"

import React, { useState } from 'react'
import { DataTable } from './data-table'
import { columns } from './columns'
import { appointments } from './data'
import { EyeClosedIcon, EyeIcon } from '@phosphor-icons/react'

export default function Appointments(){

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className='flex flex-col gap-4'>
        <div className='pl-12 flex items-center gap-3'>
        <h1 className='font-bold text-xl'>Agendamentos</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen 
          ? (
            <EyeIcon size={28}/>
          )
          :(
            <EyeClosedIcon size={28} />
          )

          }
        </button>
        

        </div>

        <div className=' px-4 py-5 bg-[radial-gradient(circle_at_center,_#bac4d2,_#bec1c5,_#e2e8f0)]'>
          <DataTable columns={columns} data={appointments}/>
        </div>
    </div>
  )
}
