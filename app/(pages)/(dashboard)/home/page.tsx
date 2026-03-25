"use client"
import { Card1 } from "@/app/_componentes/ui/card-1";
import { HLogo } from "@/app/_componentes/ui/h-logo";
import Link from "next/link";
import { useState, FormEvent } from "react";

export default function Home(){


    return(
        <section className="flex flex-col items-center gap-6 py-7 bg-slate-100 h-screen">
            <div>
                <HLogo label="Home" />
            </div>

            <div className="grid grid-cols-4 gap-2">
                <Card1 quantity={6} label="agendamentos" title="Novos prontuários" variant="green"/>
                <Card1 quantity={4} label="agendamentos"/>
                <Card1 quantity={4} label="agendamentos"/>
                <Card1 quantity={4} label="agendamentos"/>
                <Card1 quantity={4} label="agendamentos" title="Agenda de hoje" variant="green"/>
                <Card1 quantity={4} label="agendamentos"/>
                <Card1 quantity={4} label="agendamentos"/>
                <Card1 quantity={4} label="agendamentos"/>

            </div>
        



            
        </section>
    )
}