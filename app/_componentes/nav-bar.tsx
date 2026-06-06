import Link from 'next/link'
import React from 'react'
import { HLogo } from './ui/h-logo'

const navLinks = [
  {id: 1, label: "Planos", route: "#plans"},
  {id: 2, label: "Visão Geral", route: "#overview"},
  {id: 3, label: "Contato", route: "#contact"},
  {id: 4, label: "Sobre nós", route: "#about"},
]
export const  NavBar = () => {
  return (
    <nav className='flex justify-between py-5 px-8 fixed w-full bg-transparent backdrop-blur-md'>
        <div>
            <HLogo label='Your Clinic' />
        </div>
        <div className='flex items-center gap-8'>
        {navLinks.map((item) => (
          <span key={item.id} className='text-lg'>
            <Link href={item.route}>
              {item.label}
            </Link>

          </span>
        ))}
        <div className='border border-white rounded-lg'>

        <span className='text-lg bg-tranparent text-black px-4 py-1 rounded-lg'>
            <Link href="/signup">
              SignUp
            </Link>

          </span>
        <span className='text-lg bg-linear-to-br from-orange-400 to-violet-500  text-white px-4 py-1 rounded-sm'>
            <Link href="/login">
              Sign
            </Link>

          </span>

        </div>
        </div>


    </nav>
  )
}
