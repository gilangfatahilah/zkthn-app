import { Popover, PopoverTrigger, PopoverContent } from "@/Components/ui/popover"
import { Input } from "@/Components/ui/input"
import { Calendar } from "@/Components/ui/calendar"

interface CalendarProps {
  id: string,
  value: Date,
  onSelect: (e: any) => void
}

export default function CalendarInput({ id, value, onSelect }: CalendarProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative">
          <Input
            id={id}
            placeholder="Pilih Tanggal Lahir"
            readOnly
            value={value ? value.toLocaleDateString() : ""}
            className="pr-10 cursor-pointer" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(e) => onSelect(e)}
          disabled={(date) =>
            date > new Date() || date < new Date("1900-01-01")
          }
          initialFocus />
      </PopoverContent>
    </Popover>
  )
}

function CalendarDaysIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}