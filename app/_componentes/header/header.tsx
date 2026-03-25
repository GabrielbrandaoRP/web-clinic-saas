"use client"

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { UsersIcon } from "@phosphor-icons/react"
import { CalendarDays, Home, UserSquareIcon } from "lucide-react"
import Link from "next/link"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Aplicação</SidebarGroupLabel>
          <SidebarMenu>

            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/home">
                  <Home />
                  <span>Início</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            

            <SidebarMenuItem >
              <SidebarMenuButton asChild>
                <Link href="/appointments">
                  <CalendarDays />
                  <span>Agendamentos</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem >
              <SidebarMenuButton asChild>
                <Link href="/person">
                  <UsersIcon size={32} weight="bold" />
                  <span>Pacientes</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem >
              <SidebarMenuButton asChild>
                <Link href="/user">
                  <UserSquareIcon size={32} />
                  <span>Meu perfil</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
