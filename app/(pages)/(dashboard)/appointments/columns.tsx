"use client";
import { ColumnDef } from "@tanstack/react-table";
import {
  ArrowsDownUpIcon,
  CalendarDotsIcon,
  CheckIcon,
  CheckSquareOffsetIcon,
  ClockIcon,
  DotsThreeCircleIcon,
  EyeIcon,
  ListChecksIcon,
  NotePencilIcon,
  TrashIcon,
  UserIcon,
  XIcon,
} from "@phosphor-icons/react";
import { CustomTableCol } from "@/app/_componentes/ui/custom-table-col";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type Status = "Pendente" | "Confirmado" | "Cancelado" | "Realizado";

export type Appointments = {
  id: string;
  patient: string;
  date: string;
  status: Status;
  email: string;
};

const sizeDefaultIcon = 20;

export const columns: ColumnDef<Appointments>[] = [
  {
    accessorKey: "patient",
    header: () => (
      <CustomTableCol
        label="Paciente"
        icon={<UserIcon size={sizeDefaultIcon} />}
      />
    ),
  },
  {
    accessorKey: "status",
    header: () => (
      <CustomTableCol
        label="Situação"
        icon={<ListChecksIcon size={sizeDefaultIcon} />}
      />
    ),
    cell: ({ row }) => {
      const status = row.original.status;
      const statusColors: Record<string, string> = {
        Pendente: "bg-yellow-500",
        Confirmado: "bg-green-500",
        Cancelado: "bg-red-500",
        Realizado: "bg-sky-600",
      };
      const getStatusIcon = (status: string) => {
        switch (status) {
          case "Pendente":
            return <ClockIcon size={20} />;
          case "Confirmado":
            return <CheckIcon size={20} />;
          case "Cancelado":
            return <XIcon size={20} />;
          case "Realizado":
            return <CheckSquareOffsetIcon size={20} />;
          default:
            return null;
        }
      };

      return (
        <Badge className={statusColors[status] || "bg-gray-500 text-white"}>
          {getStatusIcon(status)}

          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "date",
    header: () => (
      <CustomTableCol
        label="Pacient"
        icon={<CalendarDotsIcon size={sizeDefaultIcon} />}
      />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowsDownUpIcon size={32} />
        </Button>
      );
    },
  },
  {
    header: "Ações",
    id: "actions",
    cell: ({ row }) => {
      const appointment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-4">
              <DotsThreeCircleIcon size={32} />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="">
            <DropdownMenuLabel>Opções</DropdownMenuLabel>
            <DropdownMenuItem>
              <EyeIcon size={22} />
              Visualizar
            </DropdownMenuItem>
            <DropdownMenuItem>
              <NotePencilIcon size={22} />
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-700">
              <TrashIcon size={22} className="text-red-700" />
              Excluir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
