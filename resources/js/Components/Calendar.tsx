import * as React from "react";
import { Button } from "@/Components/ui/button";
import { Calendar } from "@/Components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/Components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { formatDate } from "@/lib/formatter";

interface DatePickerProps {
    value: Date;
    limit?: boolean;
    onApply: (e: Date | undefined) => void;
}

export function DatePicker({ value, limit = false, onApply }: DatePickerProps) {
    console.log(value, typeof value);

    const [open, setOpen] = React.useState(false);

    const dateToRender = typeof value !== 'string' ? value.toISOString() : value;

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full mt-1 justify-start text-left font-normal",
                        !value && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {value !== null ? formatDate(dateToRender) : <span>Pick a date</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className=" w-full p-0">
                <Calendar
                    mode="single"
                    captionLayout="dropdown-buttons"
                    selected={value ?? new Date()}
                    onSelect={(e) => {
                        onApply(e);
                        setOpen(false);
                    }}
                    fromYear={1960}
                    toYear={2030}
                    disabled={(date) =>
                        limit
                            ? date > new Date() || date < new Date("1900-01-01")
                            : false
                    }
                />
            </PopoverContent>
        </Popover>
    );
}
