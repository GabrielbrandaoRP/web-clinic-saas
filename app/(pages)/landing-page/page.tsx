import { NavBar } from '@/app/_componentes/nav-bar'
import { HLogo } from '@/app/_componentes/ui/h-logo'
import Link from 'next/link'
import React from 'react'

export const LandingPage = () => {

  
  return (
    <>
    <NavBar/>
    <main className='flex flex-col items-center justify-center min-h-screen w-full'>
      
      <section className='flex gap-4 flex-col items-center'>

        <div>
            <h1 className='text-5xl'>Seja bem vindo ao <span className='font-bold text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-purple-600'>Your Clinic</span></h1>
        </div>
        <div>
          <h3 className='text-xl'>Aqui a sua clinica se torna mais organizada, e seu paciente menos preocupado!</h3>
        </div>

        <div className='mt-10'>
          <Link href="#" className='bg-white text-black text-lg px-4 py-3 rounded-xl hover:bg-white/70'>
            Conheça-nos
          </Link>
        </div>

        <div>
          <HLogo label='Logo test' size='xl' weight='bold'/>
        </div>
      </section>

        
    </main>
    </>
  )
}
