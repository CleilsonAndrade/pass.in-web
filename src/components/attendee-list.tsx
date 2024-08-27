import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search
} from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableCell } from './table/table-cell'
import { TableHeader } from './table/table-header'
import { TableRow } from './table/table-row'

dayjs.extend(relativeTime).locale('pt-br')

export function AttendeeList() {
  const [, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(20 / 10)

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  function goToNextPage() {
    setPage(page + 1)
  }

  function goToPreviousPage() {
    setPage(page - 1)
  }

  function goToFirstPage() {
    setPage(1)
  }

  function goToLastPage() {
    setPage(totalPages)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl">Participantes</h1>
        <div className="w-72 px-3 py-1.5 border border-white/10 bg-transparent rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            placeholder="Buscar participantes..."
            className="text-sm border-0 p-0 bg-transparent flex-1 outline-none"
          />
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader>
              <input
                onChange={onSearchInputChanged}
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10"
              />
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
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10"
              />
            </TableCell>
            <TableCell>12343</TableCell>
            <TableCell>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-white">
                  Cleilson Andrade
                </span>
                <span>cleilsonjose@hotmail.com</span>
              </div>
            </TableCell>
            <TableCell>{/* {dayjs().to()} */}</TableCell>
            <TableCell>{/* {dayjs().to()} */}</TableCell>
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
              Mostrando 10 de {totalPages} itens
            </TableCell>
            <TableCell colSpan={3} className="text-right">
              <div className="inline-flex items-center gap-8">
                <span>
                  Página {page} de {totalPages}
                </span>
                <div className="flex gap-1.5">
                  <IconButton onClick={goToFirstPage} disabled={page === 1}>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToNextPage}
                    disabled={page === totalPages}
                  >
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToLastPage}
                    disabled={page === totalPages}
                  >
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
