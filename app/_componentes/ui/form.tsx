import Link from 'next/link'
import React from 'react'
import ButtonGradient from './button-gradient';

type FormVariant = "sign" | "signup"
interface Variant{
  variant: FormVariant;
}


export const Form = ( {variant}: Variant) => {

  const signuInput = variant === "signup" 
  return (
    <div
          className="min-h-50 min-w-70 md:h-90 md:w-95 rounded-2xl py-5 px-8 
            backdrop-blur-xl border-2 bg-slate-50/30
           
            flex flex-col items-center justify-evenly"
        >
          <div>
            <h1 className='text-2xl font-bold'>
                Acesse sua conta Your Clinic!
              </h1>
            <p>Embarque </p>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <input
              type="text"
              placeholder="Digite seu email"
              className="bg-slate-200 p-3 rounded-lg pl-6"
            />
            <input
              type="text"
              placeholder="Digite sua senha"
              className="bg-slate-200 p-3 rounded-lg pl-6"
            />
            {signuInput && (
              <div>
                teste
              </div>
            )}
            
          </div>
            <ButtonGradient label='Entrar' link='home'/>
        </div>
  )
}
