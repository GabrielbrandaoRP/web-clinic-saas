"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import useSWR from "swr"
import { getPersonService } from "./service"
import { ArrowsClockwiseIcon } from "@phosphor-icons/react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  
}

export function DataTable<TData, TValue>({
  columns,
  
}: DataTableProps<TData, TValue>) {

  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 20
  });
  const [globalFilter, setGlobalFilter] = useState<string>("")
  const {data, isValidating} = useSWR([pagination.pageIndex, globalFilter], () => {
    return getPersonService(pagination.pageIndex, globalFilter)
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: data?.results || [],
    columns,
    manualPagination: true,
    rowCount: data?.info.count || 0,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    
    state: {
      sorting,
      pagination,
      globalFilter
    }
  })

  return (
    <>
    <Input
      placeholder="Buscar"
      value={globalFilter}
      onChange={(event) => 
        table.setGlobalFilter(event.target.value)
      }
      className="w-full mb-4"
    />
    <div className="overflow-hidden rounded-lg backdrop-blur-3xl">
      <Table>
        <TableHeader className="bg-gray-300">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {isValidating ? (
                  <div className="animate-spin">
                    <ArrowsClockwiseIcon size={32} />
                  </div>
                ) : "Nenhum resultado encontrado"}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
    <div className="flex items-center justify-between space-x-2 py-4 border border-black">
      <div className="space-x-4 ml-3">
        <span className="bg-white p-2 rounded-md">
        <b>Página:</b> {pagination.pageIndex + 1}
        
        </span>
        <span className="bg-white p-2 rounded-md">
        <b>Tamanho:</b> {pagination.pageSize}
        </span>
      </div>
      <div className="p-2 space-x-2">

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
      </div>
    </>
  )
}