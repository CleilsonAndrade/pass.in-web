import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableCell } from "./table/table-cell";
import { TableHeader } from "./table/table-header";
import { TableRow } from "./table/table-row";

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl">Participantes</h1>
        <div className="w-72 px-3 py-1.5 border border-white/10 bg-transparent rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input placeholder="Buscar participantes..." className="text-sm border-0 p-0 bg-transparent flex-1 outline-none" />
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader>
              <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
            </TableHeader>
            <TableHeader style={{ width: 48 }}>Código</TableHeader>
            <TableHeader>Participantes</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          <TableRow>
            <TableCell>
              <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
            </TableCell>
            <TableCell>12343</TableCell>
            <TableCell>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-white">Cleilson Andrade</span>
                <span>cleilsonjose@hotmail.com</span>
              </div>
            </TableCell>
            <TableCell>7 dias atrás</TableCell>
            <TableCell>3 dias atrás</TableCell>
            <TableCell>
              <IconButton transparent>
                <MoreHorizontal className="size-4" />
              </IconButton>
            </TableCell>
          </TableRow>
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>
              Mostrando 10 de 228 itens
            </TableCell>
            <TableCell colSpan={3} className="text-right">
              <div className="inline-flex items-center gap-8">
                <span>Página 1 de 23</span>
                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>

    </div>
  )
}