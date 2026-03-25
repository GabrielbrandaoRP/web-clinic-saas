import { NavBar } from '@/app/_componentes/nav-bar'
import Link from 'next/link'
import React from 'react'

export const LandingPage = () => {

  
  return (
    <>
    <NavBar/>
    <main className='flex flex-col items-center justify-center min-h-screen w-full'>
      
      <section className='flex gap-4 flex-col items-center'>

        <div>
            <h1 className='text-5xl'>Seja bem vindo ao <span className='font-bold text-transparent bg-clip-text bg-linear-to-br from-slate-300 to-slate-500'>Your Clinic</span></h1>
        </div>
        <div>
          <h3 className='text-xl'>Aqui a sua clinica se torna mais organizada, e seu paciente menos preocupado!</h3>
        </div>

        <div className='mt-10'>
          <Link href="#" className='bg-linear-to-br from-slate-300 to-slate-500
           text-white font-bold text-lg px-4 py-3 rounded-md hover:bg-white/70'>
            Conheça-nos
          </Link>
        </div>

      </section>

        
    </main>
    </>
  )
}
