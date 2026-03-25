import React from "react";
import { CustomBadge } from "./custom-badge";

type Card1Props = {
    title?: string;
    content?: string;
    quantity?: number;
    label?: string;
    variant?: "link" | "green" | "secondary" | "destructive" | "outline" | "ghost";
}
export const Card1 = ({title, content, quantity, label, variant}: Card1Props) => {

  return (
    <button className="flex flex-col bg-slate-200 border border-slate-400
     w-45 h-60 rounded-xl shadow-2xl cursor-pointer hover:scale-101
        ">
      <div className="flex flex-col h-[80%] rounded-t-xl p-4">
        <h1 className="font-bold text-sm">{title || "Agendamentos para hoje"}</h1>
        <p className="text-sm">{content || "Clique e veja seus pŕoximos agendamentos para o dia de hoje!"}</p>
      </div>
      <div className="p-3  flex h-[20%] rounded-b-xl border-t border-slate-400">
        <CustomBadge  variant={variant || "secondary"}>
          
          
              {quantity || "2"} {label} para hoje
          
        </CustomBadge>
      </div>
    </button>
  );
};
