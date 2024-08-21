import { Search } from "lucide-react";

export function AttendeeList() {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl">Participantes</h1>
        <div className="w-72 px-3 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input placeholder="Buscar participantes..." className="bg-transparent flex-1 outline-none" />
        </div>
      </div>


    </div>
  )
}