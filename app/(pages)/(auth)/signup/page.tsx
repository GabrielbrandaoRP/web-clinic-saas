
import { Form } from '@/app/_componentes/ui/form'
import React from 'react'

export default function SignUp(){
  return (
        <section className=" bg-linear-to-br from-slate-300 to-slate-500 h-screen w-full">
          <div className="flex flex-row justify-between p-20 backdrop-blur-2xl">
            <Form
               variant='signup' 
            />
    
            {/*  */}
            <div className="border w-120 mr-30 flex items-start pt-3 justify-center">
              <h1 className="scroll-m-20 text-center tracking-tight text-balance text-4xl">
                Vamos iniciar o futuro da sua organização?
                </h1>
              
    
            </div>
          </div>
        </section>
  )
}
