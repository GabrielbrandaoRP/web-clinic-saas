"use client"
import { ColumnDef } from "@tanstack/react-table"
import {ArrowsDownUpIcon, CalendarDotsIcon,  CaretDownIcon,  CaretUpDownIcon,  CheckIcon,  CheckSquareOffsetIcon,  ClockIcon,  DotsThreeCircleIcon,  DotsThreeIcon,  EnvelopeSimpleIcon,  EyeIcon,  ListChecksIcon,  NotePencilIcon,  TrashIcon,  UserIcon, XIcon} from "@phosphor-icons/react"
import { CustomTableCol } from "@/app/_componentes/ui/custom-table-col";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";


export type Person = {
    id: string;
    name: string;
    gender: string,
    image: string;
}


const sizeDefaultIcon = 20

export const columns: ColumnDef<Person>[] = [
    {
        accessorKey: "image",
        header: () => <CustomTableCol label="Avatar"/>
        
    },
    {
        accessorKey: "name",
        header: ({column}) => {
            return(
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Nome
                    <ArrowsDownUpIcon size={32}/>
                </Button>
            )
        }  
        },
    {
        accessorKey: "gender",
        header: () => <CustomTableCol label="Gênero" />
    },
    {
        id: "actions",
        header: "Ações",
        cell:({row}) => {
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
                            <EyeIcon size={22}/>
                            Visualizar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <NotePencilIcon size={22}/>
                            Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-700">
                            <TrashIcon size={22} className="text-red-700"/>
                            Excluir
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]