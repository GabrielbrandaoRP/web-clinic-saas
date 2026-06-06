import { NavBar } from '@/app/_componentes/nav-bar'
import { HLogo } from '@/app/_componentes/ui/h-logo'
import Link from 'next/link'
import React from 'react'

export const LandingPage = () => {


  return (
    <>
      <NavBar />
      <main className='flex flex-col items-center justify-center min-h-screen w-full'>

        <section className='flex gap-4 flex-col justify-center items-center w-full p-10 h-150'>

          <div className='flex flex-row items-center border gap-1'>
            <h1 className='text-4xl'>Seja bem vindo ao </h1><HLogo label='Your Clinic' />
          </div>
          <div>
            <h3 className='text-xl'>Aqui a sua clinica se torna mais organizada, e seu paciente menos preocupado!</h3>
          </div>

          <div className='mt-10'>
            <Link href="#" className='bg-linear-to-br from-orange-400 to-violet-500
           text-white font-bold text-lg px-4 py-3 rounded-md hover:bg-white/70'>
              Conheça-nos
            </Link>
          </div>

        </section>
        <section className='bg-linear-to-br from-orange-400 to-violet-500 
            h-100 rounded-4xl w-full flex justify-center items-center'>
          <div className='border flex  gap-5 px-20 items-center'>

            <div>
              <h1 className='text-4xl font-bold'>Uma plataforma completa <br /> para a sua clinica e seus pacientes</h1>
              <h1>
                Gerencie Consultas, sessoes, agendamentos e ganhos
              </h1>
            </div>

            <div>
                <h1>right</h1>
            </div>

          </div>

        </section>


      </main>
    </>
  )
}
