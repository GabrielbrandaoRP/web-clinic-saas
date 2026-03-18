import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <section className=" bg-linear-to-br from-amber-200 to-amber-300 h-screen w-full">
      <div className="flex flex-row p-20 backdrop-blur-xl">
        <div
          className="min-h-50 min-w-70 md:h-90 md:w-95 rounded-2xl py-5 px-8 bg-zinc-900
            flex flex-col items-center justify-evenly"
        >
          <div className="flex flex-col gap-3 w-full">
            <input
              type="text"
              placeholder="Digite seu email"
              className="bg-zinc-800 p-3 rounded-lg w-full "
            />
            <input
              type="text"
              placeholder="Digite sua senha"
              className="bg-zinc-800 p-3 rounded-lg"
            />
          </div>
          <Link href="/home">
          <button className="bg-amber-200 min-w-40 px-4 py-3 rounded-lg">
            Entrar
          </button>
          </Link>
        </div>
        <div></div>
      </div>
    </section>
  );
}
